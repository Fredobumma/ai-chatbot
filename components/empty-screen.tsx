export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl flex flex-col gap-2 rounded-lg border bg-background p-8 px-12">
      <h1 className="text-lg font-semibold">Welcome to MEDBOT AI!</h1>
      <p className="leading-normal text-muted-foreground">
        This is an AI powered healthcare chatbot that enhances accessibility,
        provides real-time information, and offers personalized support to
        address healthcare challenges, including appointment scheduling,
        medication management, mental health support, and health education.
      </p>
    </div>
  )
}
