export default function MarkdownContent({ html }: { html: string }) {
  return (
    <div
      className="prose-legal max-w-2xl text-ink [&_a]:text-accent [&_a]:underline [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-2xl [&_li]:mt-1 [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-slate [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
