
import Feed from "@components/Feed";
const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className=" head_text text-center">
        Discover & Share
        <br />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open source AI Prompting tool for modern worl to
        discover,creat and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default page;
