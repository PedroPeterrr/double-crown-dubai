function Paragraph({
  children
}) {
  return (
    <p className="text-white text-[13px] md:text-2xl lg:text-2xl leading-normal">
      {children}
    </p>
  )
}

export default Paragraph;