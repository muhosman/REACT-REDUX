import Graph from "../components/Graph";

function DashBoardPage() {
  function DashTag1(props) {
    return (
      <div className="flex flex-col items-center w-1/2">
        <p className=" text-4xl font-extrabold">{props.amount}</p>
        <p className="text-center w-36 text-sm">{props.name}</p>
      </div>
    );
  }
  function DashTag2(props) {
    return (
      <div className="flex flex-col items-center">
        <p className=" text-4xl font-extrabold">{props.amount}</p>
        <p className="text-center text-sm">{props.name}</p>
      </div>
    );
  }
  function DashTag3(props) {
    return (
      <div className="flex flex-col gap-3 items-center justify-between">
        <p className=" text-4xl font-extrabold">{props.amount}</p>
        <p className="text-center text-sm">{props.name}</p>
        <button className=" text-center font-bold">Detay</button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-12 mr-10 mb-10">
      <div className="flex gap-6">
        <div className="bg-white w-fit px-6 py-12 rounded-xl">
          <Graph />
        </div>
        <div className="flex flex-col w-full justify-between">
          <div className="bg-white flex flex-col items-center gap-3 rounded-xl">
            <div className="flex justify-center gap-6 p-4">
              <button>Dün</button>
              <button>Bugün</button>
              <button>Haftalık</button>
              <button>Aylık</button>
              <button>Yıllık</button>
            </div>
            <div className="flex flex-col p-4 gap-6">
              <div className="flex gap-12 justify-center">
                <DashTag1 name="Firma" amount={0} />
                <hr className=" border-slate-500 border-2 h-full" />
                <DashTag1 name="Kahve Cihazı" amount={0} />
              </div>
              <div className="flex gap-12 justify-center">
                <DashTag1 name="Kahve Tüketimi" amount={0} />
                <hr className=" border-slate-500 border-2 h-full" />
                <DashTag1 name="Çay Tüketimi" amount={0} />
              </div>
            </div>
          </div>
          <div className="flex bg-white text-slate-700 p-6 gap-4 justify-between rounded-xl">
            <DashTag2 name="Firma" amount={0} />
            <hr className=" border-slate-500 border-2 h-full" />
            <DashTag2 name="Kahve Cihazı" amount={0} />
            <hr className=" border-slate-500 border-2 h-full" />
            <DashTag2 name="Çay Cihazı" amount={0} />
            <hr className=" border-slate-500 border-2 h-full" />
            <DashTag2 name="Bekleyen Siparişler" amount={0} />
          </div>
        </div>
      </div>
      <div className="flex bg-white text-slate-700 gap-2 p-10 justify-between rounded-xl">
        <DashTag3 name="Müşteride Bulunan Cihazlar" amount={0} />
        <hr className=" border-slate-500 border-2 h-36" />
        <DashTag3 name="Servisde Bulunan Cihazlar" amount={0} />
        <hr className=" border-slate-500 border-2 h-36" />
        <DashTag3 name="Depoda Bulunan Cihazlar" amount={0} />
        <hr className=" border-slate-500 border-2 h-36" />
        <DashTag3 name="Plasiyerde Bulunan Cihazlar" amount={0} />
        <hr className=" border-slate-500 border-2 h-36" />
        <DashTag3 name="Kritik Seviyedeki Cihazlar" amount={0} />
        <hr className=" border-slate-500 border-2 h-36" />
        <DashTag3 name="Kritik Seviyedeki Firmalar" amount={0} />
        <hr className=" border-slate-500 border-2 h-36" />
        <DashTag3 name="Kotası Biten Cihazlar" amount={0} />
        <hr className=" border-slate-500 border-2 h-36" />
        <DashTag3 name="Son 3 Gündür Bağlanmayanlar" amount={0} />
      </div>
      <div className="flex items-center justify-center bg-white text-slate-700 p-6 gap-24 rounded-xl">
        <div className="flex flex-col items-center">
          <p className=" text-4xl">0</p>
          <p className="text-center text-sm">Sözleşme Fesih Eden Firmalar</p>
          <button className=" text-center font-bold">Detay</button>
        </div>
        <hr className=" border-slate-500 border-2 h-24" />
        <div className="flex flex-col items-center ">
          <p className=" text-4xl">0</p>
          <p className="text-center text-sm">
            Yeni Sözleşme İmzalanan Firmalar
          </p>
          <button className=" text-center font-bold">Detay</button>
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage;
