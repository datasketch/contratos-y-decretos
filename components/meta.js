function Meta({
  title = 'Contratos y Decretos',
  description = 'Alertas de riesgo de corrupción en los decretos presidenciales',
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta
        itemProp="image"
        content="https://res.cloudinary.com/randommonkey/image/upload/v1608049508/contratos-y-decretos/contratos-y-decretos.png"
      />

      <meta property="og:url" content="https://www.framer.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/randommonkey/image/upload/v1608049508/contratos-y-decretos/contratos-y-decretos.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/randommonkey/image/upload/v1608049508/contratos-y-decretos/contratos-y-decretos.png"
      />
    </>
  );
}

export default Meta;
