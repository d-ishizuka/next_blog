import Hero from "@/components/hero";
import Container from "@/components/container";
import Meta from "@/components/meta";

export const metadata = Meta({
  pageTitle: "ブログ",
  pageDesc: "ブログの記事一覧"
});

export default function Blog() {
  return (
    <Container>
      <Hero 
        title="Blog"
        subtitle="Recent posts"
      />
    </Container>
  )
}