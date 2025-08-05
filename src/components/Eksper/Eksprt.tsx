import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.jpg'

const Eksprt = () => {
  type TeamMember = {
    id: number;
    image: string;
    name: string;
    role: string;
  };

  const teamData: TeamMember[] = [
    {
      id: 1,
      image: img1,
      name: "Artem Panferov",
      role: "Founder, CEO, AI Expert ",
    },
    {
      id: 2,
      image: img2,
      name: "Pavel Panferov",
      role: "Founder, Business Analyst",
    },
  ];
  return (
    <section className="pb-[80px] container">
      <div className="md:text-4xl text-white md:pl-5 pb-8 flex justify-center text-2xl">
        <strong>Эксперты мастер-класса</strong>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center w-64 bg-white rounded-3xl shadow-md overflow-hidden md:w-[560px]"
          >
            <div
              className="w-full bg-center bg-cover aspect-square"
              style={{ backgroundImage: `url(${member.image})` }}
              role="img"
              aria-label={member.name}
            />
            <div className="w-full bg-white py-4 px-4">
              <div className="uppercase text-gray-400 text-sm font-normal">
                {member.role}
              </div>
              <div className="text-[#050419] text-xl font-medium">
                {member.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Eksprt;
