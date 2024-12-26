const NewsletterBox = () => {
  // Event handlers
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 md:gap-5">
      <h6 className="font-medium text-lg md:text-2xl">
        Subscribe now & get 20% off
      </h6>
      <p className="text-gray-400 text-xs">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="sm:w-5/6 md:w-1/2 flex items-center justify-center text-xs sm:text-md"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="outline-none border-y border-l px-3 py-2 sm:px-4 sm:py-3 w-full"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 sm:px-7 sm:py-3  cursor-pointer"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
