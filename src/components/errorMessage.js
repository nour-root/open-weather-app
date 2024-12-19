const errorMessage = (msg) => {
	return `
    <div class="flex flex-col gap-5 items-center">
      <div class="bg-red-500 text-white w-fit px-3 py-2 rounded-md">
        ${msg}
      </div>
      <button
        class="w-fit px-5 py-1 rounded-md text-base text-center text-sky-blue bg-white"
        id="retry"
      >
        Retry
      </button>
    </div>
  `;
};

export default errorMessage;
