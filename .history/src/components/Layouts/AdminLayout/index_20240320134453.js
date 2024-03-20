function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ padding: 0 }}>{children}</div>
    </div>
  );
}

export default AdminLayout;
