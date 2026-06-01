import founderImage from '../assets/devendra-mishra-founder.jpeg';

export default function Founder() {
  return (
    <div className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-5xl font-bold">
          Devendra Mishra
        </h1>

        <p className="mb-4 text-xl text-gray-600">
          Founder & Owner
        </p>

        <img
          src={founderImage}
          alt="Devendra Mishra, Founder & Owner of Maa Durga Security Services"
          className="mb-8 h-96 w-full rounded-lg object-cover"
        />

        <h2 className="mb-4 text-3xl font-semibold">
          About The Founder
        </h2>

        <p className="text-lg leading-relaxed">
          Devendra Mishra is the founder of Maa Durga Security Service.
          He established the company with the vision of providing
          reliable, professional, and disciplined security services
          for industries, businesses, residential societies, institutions,
          and events across Surat and Gujarat.
        </p>
      </div>
    </div>
  );
}
