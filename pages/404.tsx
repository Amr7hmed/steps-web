/* eslint-disable @next/next/no-html-link-for-pages */

import CustomHead from "@/components/custom-head";

export default function NotFoundPage() {
  return (
    <>
      <CustomHead />
      <main>
        <section className="notfound full-height">
          <img src="/assets/icons/notfound.png" alt="Iconnotfound" />
          <h6>404 Error</h6>
          <p>Sorry , page not found</p>
          <a href="/">Back To Home </a>
        </section>
      </main>
    </>
  );
}
