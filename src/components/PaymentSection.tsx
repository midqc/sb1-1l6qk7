import React from 'react';
import { CreditCard } from 'lucide-react';

const PaymentSection: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-primary-dark bg-opacity-30 border-t-[1px] border-t-lime-800 border-opacity-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
          Payment Options
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <div className=" p-8 rounded-md relative">
            <img
              src="/qrcode.png"
              alt="QR Code"
              className="w-64 h-64 mx-auto mb-4 qr-code-filter"
            />
            <p className="text-lime-200 text-lg mb-2">Scan to pay</p>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="upi://pay?pa=9646868859@ptsbi&amp;pn=Thind Car Wash&amp;cu=INR"
              target="_blank"
              rel="noreferrer"
              className="flex items-center bg-accent hover:bg-secondary transition duration-300 px-10 py-5 rounded-sm text-xl font-semibold text-primary-dark flex items-center"
            >
              <CreditCard className="mr-4" size={28} />
              Pay using UPI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
