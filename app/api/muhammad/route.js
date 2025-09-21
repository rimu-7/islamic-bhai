// app/api/wikipedia-content/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get('lang') || 'bn';

  try {
    const wikiBase = language === 'bn' ? 'bn.wikipedia.org' : 'en.wikipedia.org';
    const pageTitle = language === 'bn' ? 'মুহাম্মাদ' : 'Muhammad';

    // Redirect check
    const queryResponse = await fetch(
      `https://${wikiBase}/w/api.php?` +
        new URLSearchParams({
          action: 'query',
          titles: pageTitle,
          redirects: true,
          format: 'json',
          origin: '*',
        })
    );
    
    if (!queryResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch data from Wikipedia' },
        { status: queryResponse.status }
      );
    }
    
    const queryData = await queryResponse.json();
    const page = Object.values(queryData.query.pages)[0];
    
    if (page.missing) {
      return NextResponse.json(
        { error: 'Page not found' },
        { status: 404 }
      );
    }
    
    const resolvedTitle = page.title || pageTitle;

    // Fetch content and TOC
    const contentResponse = await fetch(
      `https://${wikiBase}/w/api.php?` +
        new URLSearchParams({
          action: 'parse',
          page: resolvedTitle,
          format: 'json',
          prop: 'text|sections',
          origin: '*',
        })
    );
    
    if (!contentResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch content from Wikipedia' },
        { status: contentResponse.status }
      );
    }
    
    const contentData = await contentResponse.json();
    
    if (contentData.error) {
      return NextResponse.json(
        { error: contentData.error.info },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      content: contentData.parse.text['*'],
      sections: contentData.parse.sections,
      title: resolvedTitle
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}