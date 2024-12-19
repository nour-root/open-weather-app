const startScreen = () => `
<div class="w-full my-5 bg-white rounded-md">
  <div class="border-b-[1px] border-slate-400 p-5">
    <h2 class="text-xl text-sky-blue font-bold">Weather App</h2>
  </div>
  <div class="p-5 py-8 flex flex-col gap-5">
    <div class="flex items-center gap-4">
      <input
        type="text"
        name="city"
        id="city"
        class="text-center text-lg py-3 w-full rounded-md border-[1px] border-slate-400"
        placeholder="Enter City Name"
      />
      <button
        class="w-fit !h-full px-2 py-3 rounded-md bg-sky-blue"
        id="use-search"
      >
        <img class="w-5" src="/assets/search.svg" />
      </button>
    </div>
    <div class="flex items-center gap-3">
      <hr class="w-full border-t-slate-400" />
      <span class="text-slate-400 text-lg"> or </span>
      <hr class="w-full border-t-slate-400" />
    </div>
    <button
      class="w-full py-3 rounded-md text-lg text-center text-white bg-sky-blue"
      id="use-location"
    >
      Get Device Location
    </button>
  </div>
</div>
`;

export default startScreen;
