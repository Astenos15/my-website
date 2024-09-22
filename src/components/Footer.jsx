const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="footer">
      <p>Let&apos;s build something amazing together</p>
      <span>&#64;{date}</span>
    </section>
  );
};

export default Footer;
