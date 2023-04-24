
export default function Error(error: any) {
  return (
    <div className="h-100 w-100 flex-center-center">
      <div className="flex-center-center">
        <h1 className="text-center">404</h1>
        <pre>
          <code>{error?.message}</code>
        </pre>
      </div>
    </div>
  );
}
