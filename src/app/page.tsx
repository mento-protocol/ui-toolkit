import { Button } from "@/components/ui";

export default function ComponentsShowcase() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Components</h1>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </section>
    </div>
  );
}
