import { NextRequest, NextResponse } from 'next/server';

import { propOr } from 'ramda';

const PUBLIC_FILE = /\.(.*)$/;

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*.json|.*.png|.*.js|.*.jpeg|.*.svg).*)',
    '/',
  ],
};

export function middleware(req: NextRequest) {
  const locale = propOr('', 'value', req.cookies.get('NEXT_LOCALE'));
  if (PUBLIC_FILE.test(req.nextUrl.pathname) || !locale) {
    return;
  }

  if (req.nextUrl.locale !== locale) {
    // eslint-disable-next-line consistent-return
    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url),
    );
  }
}
