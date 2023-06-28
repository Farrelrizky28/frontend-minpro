import Content from "@/pages/shared/content";
import { useRouter } from "next/router";
import Image from "next/image";
import { ApplyProgressDashboard } from "@/pages/data/data";
import { ArrowRight } from "@mui/icons-material";



const ApplyProgress = () => {
  const router = useRouter();
  return (
    <div className="mt-24">
      <Content
        title={`Apply Progress Dashboard`}
        fungsi1={() => router.back()}
        namafungsi1="Back"
      ></Content>
      <div className="flex flex-wrap justify-center bg-red-400">
  {ApplyProgressDashboard.map((apply, i) => (
    <div className="w-80 mx-4 bg-white rounded-lg p-4 my-4">
      <Image src={apply.gambar} className="h-[200px] w-full" alt="" />
      <div className="mt-2">
        <h1 className="font-semibold">{apply.judul}</h1>
        <h3>Apply Date: {apply.applyDate}</h3>
        <h3>Status: {apply.status}</h3>
        <h3>Last Progress: {apply.progress}</h3>
        <div className="text-end mt-2">
        <button className="order-0 px-4 py-1 border border-transparent rounded-xl bg-orange-300 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oranbg-orange-700 sm:order-1 hover:bg-orange-400">
          Check Progress
          <ArrowRight/>
        </button>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default ApplyProgress;
