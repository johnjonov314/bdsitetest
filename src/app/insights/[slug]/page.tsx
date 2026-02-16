import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { getInsightBySlug } from "@/lib/cms/content";

type Props = { params: { slug: string } };

export default async function InsightPage({ params }: Props) {
  const post = await getInsightBySlug(params.slug);
  if (!post) return notFound();

  return (
    <Container>
      <article className="py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Аналитика", href: "/insights" }, { label: post.title }]} />
        <h1 className="text-4xl font-semibold">{post.title}</h1>
        <p className="mt-2 text-sm text-muted">{post.publishedAt}</p>
        <p className="mt-6 max-w-4xl text-lg text-muted">{post.content}</p>
      </article>
    </Container>
  );
}
