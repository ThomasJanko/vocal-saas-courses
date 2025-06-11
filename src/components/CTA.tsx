import Image from 'next/image'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="cta-section">
        <div className="cta-badge">
            Start learning your way.
        </div>
        <h2 className='text-3xl font-bold'>Build and personalize your AI companion</h2>
        <p className='text-lg'>
            Create a personalized AI companion that learns your style and preferences.
        </p>
        <Image src="/images/cta.svg" alt="CTA Image" width={362} height={232} />
        <div className="cta-buttons">
            <button className="btn-primary">
                <Image src="/icons/plus.svg" alt="Plus" width={12} height={12} />
                <Link href="/companions/new">
                    <p>Build a new Companion</p>
                </Link>
            </button>
        </div>
    </section>
  )
}

export default CTA