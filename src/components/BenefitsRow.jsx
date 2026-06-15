const benefits = [
  { icon: '↗', title: 'Fast Delivery', text: 'Quick delivery across Georgia' },
  { icon: '⌁', title: 'Secure Payment', text: 'Simple and reliable ordering' },
  { icon: '↩', title: 'Easy Returns', text: 'Easy exchange within 14 days' },
  { icon: '◉', title: 'Customer Support', text: 'Friendly help when you need it' },
]

function BenefitsRow() {
  return (
    <div className="benefits-row">
      {benefits.map((benefit) => (
        <div className="benefit" key={benefit.title}>
          <span>{benefit.icon}</span>
          <div><strong>{benefit.title}</strong><small>{benefit.text}</small></div>
        </div>
      ))}
    </div>
  )
}

export default BenefitsRow
