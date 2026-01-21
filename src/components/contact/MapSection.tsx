
interface MapSectionProps {
  address: string;
  phone: string;
  email: string;
}

const MapSection = ({ address, phone, email }: MapSectionProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg h-full">
      <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
      
      <div className="space-y-4 mb-8">
        <div>
          <h4 className="font-medium text-tvm-blue mb-1">Address</h4>
          <p className="text-tvm-gray">{address}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-tvm-blue mb-1">Phone</h4>
          <p className="text-tvm-gray">{phone}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-tvm-blue mb-1">Email</h4>
          <p className="text-tvm-gray">{email}</p>
        </div>
      </div>
      
      <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15008.691289242522!2d75.31450582772513!3d19.87102019072472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba309de81e2c5%3A0xb14be1e1ae3ced76!2sCIDCO%2C%20Aurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715462835485!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="TVM IT Solutions Location"
        />
      </div>
    </div>
  );
};

export default MapSection;
