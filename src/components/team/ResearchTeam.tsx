import Image, { StaticImageData } from 'next/image';
import imgNganNguyen from '@/assets/ngan-nguyen.png';
import imgTommyDang from '@/assets/tommy-dang.png';
import imgMarzhanN from '@/assets/marzhan-n.png';
import imgVibhor from '@/assets/vibhor.png';
import imgArishahuda from '@/assets/arishahuda.jpg';
import imgElizabeth from '@/assets/elizabeth.png';
import imgChengYun from '@/assets/cheng-yun.png';
import imgJonathan from '@/assets/jonathan.png';
import imgLauren from '@/assets/lauren.png';
import imgTingTing from '@/assets/ting-ting.png';
import imgDavidPriebe from '@/assets/david-priebe.png';

interface TeamMember {
  img: StaticImageData;
  name: string;
  role: string;
  institution: string;
  href: string | null;
}

const teamMembers: TeamMember[] = [
  { img: imgNganNguyen, name: 'Ngan V.T. Nguyen', role: 'Lead Developer', institution: 'Vietnam National University', href: 'https://phys.hcmus.edu.vn/vat-ly-tin-hoc/nhan-su/ths-nguyen-vuong-thuy-ngan' },
  { img: imgArishahuda, name: 'Arishahuda S. Zakry', role: 'Developer', institution: 'University of Michigan, Ann Arbor', href: 'https://www.linkedin.com/in/arisha-zakry/' },
  { img: imgTommyDang, name: 'Tommy Dang', role: 'Developer', institution: 'Texas Tech University', href: 'https://www.depts.ttu.edu/cs/faculty/tommy_dang/index.php' },
  { img: imgMarzhanN, name: 'Marzhan Nurdauletova', role: 'UX/UI Design', institution: 'University of Michigan, Ann Arbor', href: 'https://www.linkedin.com/in/nurmarie/' },
  { img: imgVibhor, name: 'Vibhor Katiyar', role: 'UX/UI Design', institution: 'University of Michigan, Ann Arbor', href: 'https://www.linkedin.com/in/vibhor-katiyar-753687224/' },
  { img: imgElizabeth, name: 'Elizabeth A. M. Acosta', role: 'Annotator', institution: 'Texas Tech University', href: 'https://www.depts.ttu.edu/visual-performing-arts/research/performing-arts-research-lab/members/acosta-elizabeth.php' },
  { img: imgChengYun, name: 'Cheng-Yun (Mia) Wang', role: 'Annotator', institution: 'Texas Tech University', href: 'https://www.depts.ttu.edu/visual-performing-arts/research/performing-arts-research-lab/members/wang-cheng-yung-mia.php' },
  { img: imgJonathan, name: 'Jonathan Masley', role: 'Annotator', institution: 'Texas Tech University', href: 'https://www.depts.ttu.edu/visual-performing-arts/research/performing-arts-research-lab/members/masley-jonathan.php' },
  { img: imgLauren, name: 'Lauren Peterson', role: 'Annotator', institution: 'Texas Tech University', href: null },
  { img: imgTingTing, name: 'Ting Ting Goh', role: 'Annotator', institution: 'Texas Tech University', href: 'https://www.depts.ttu.edu/pragmaticism/about/people/tingtinggoh.php?v=preview' },
  { img: imgDavidPriebe, name: 'David Priebe', role: 'Annotator', institution: 'Texas Tech University', href: 'https://www.dpriebetheatre.net/about' },
];

const ROLE_SECTIONS = [
  { label: 'Developers', roles: ['Developer', 'Lead Developer'] },
  { label: 'UI/UX Design', roles: ['UX/UI Design'] },
  { label: 'Annotators', roles: ['Annotator'] },
];

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col gap-4 items-start">
      <div className="relative w-40 h-40 rounded-lg overflow-hidden border border-black/10 shrink-0">
        <Image src={member.img} alt={member.name} fill className="object-cover object-top" />
      </div>
      <div className="flex flex-col gap-1">
        {member.href ? (
          <a
            href={member.href}
            target="_blank"
            rel="noreferrer"
            className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e] underline hover:text-[#3b6edc] font-display"
          >
            {member.name}
          </a>
        ) : (
          <p className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e] underline font-display">
            {member.name}
          </p>
        )}
        <p className="text-[18px] font-normal leading-[1.5] text-[#444]">{member.role}</p>
      </div>
      <p className="text-[16px] font-normal leading-[1.5] text-[#6b6b6b]">{member.institution}</p>
    </div>
  );
}

export default function ResearchTeam() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 py-16 md:py-40 flex flex-col gap-16">
        <h2 className="text-[28px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.8px] text-[#1e1e1e] font-display">
          Research Team
        </h2>
        <div className="flex flex-col gap-16">
          {ROLE_SECTIONS.map(({ label, roles }) => {
            const members = teamMembers.filter((m) => roles.includes(m.role));
            if (!members.length) return null;
            return (
              <div key={label} className="flex flex-col gap-8">
                <h3 className="text-[28px] font-semibold leading-[1.2] text-[#1e1e1e] font-display">{label}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {members.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
