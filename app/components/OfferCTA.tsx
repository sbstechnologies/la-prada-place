interface OfferCTAProps {
  phone: string;
  tel: string;
}

export default function OfferCTA({ phone, tel }: OfferCTAProps) {
  return (
    <section className="bg-[#f5f2ed] px-6 pb-14 sm:px-6 md:px-20 lg:px-40 xl:px-40 xxl:px-80 md:pb-20">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 rounded-[26px] bg-[#db8d1f] px-8 py-7 md:px-12 md:py-9 lg:flex-row lg:items-center lg:justify-between">
        {/* Content */}
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-white/90">
            LIMITED TIME OFFER
          </p>

          <h2 className="font-[Instrument_Serif] text-[36px] leading-none text-white md:text-[52px]">
            Look & Lease Special
          </h2>

          <p className="mt-3 font-[Plus_Jakarta_Sans] text-[17px] text-white md:text-[18px]">
            Act fast to get our today!{" "}
            <span className="font-bold"> best rates</span> while they last.
            Contact us for current details
          </p>
        </div>

        {/* Call Button */}
        <div className="shrink-0">
          <a
            href={tel}
            className="inline-flex items-center justify-center rounded-[20px] bg-[#1a3a70] px-8 py-4 font-[Plus_Jakarta_Sans] text-sm font-semibold tracking-wide text-white shadow-[0_6px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#132b54] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)] active:scale-[0.98]"
          >
            Call Now: {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
