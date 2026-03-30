export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1>🚀 Mi App Next.js con Docker + CI/CD</h1>
      <p>Desplegada automáticamente con GitHub Actions en AWS EC2</p>
    </main>
  );
}