import AsideThemeEdit from "../components/aside-theme-edit";

const Home = () => {
  return (
    <main className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        {/* Sidebar */}
        <AsideThemeEdit />
        {/* Contents */}
        <div className="flex-1 w-full h-full flex items-center justify-center">
          <div className="max-w-[320px] h-fit flex-1 rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="space-y-1.5 p-6 flex flex-row items-center">
              <div className="flex items-center space-x-4">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <img
                    className="aspect-square h-full w-full"
                    alt="Image"
                    src="./avatars/01.png"
                  />
                </span>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">m@example.com</p>
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 ml-auto rounded-full"
                data-state="closed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <line x1="12" x2="12" y1="5" y2="19"></line>
                  <line x1="5" x2="19" y1="12" y2="12"></line>
                </svg>
                <span className="sr-only">New message</span>
              </button>
            </div>
            <div className="p-6 pt-0">
              <div className="space-y-4">
                <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
                  Hi, how can I help you today?
                </div>
                <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
                  Hey, I'm having trouble with my account.
                </div>
                <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
                  What seems to be the problem?
                </div>
                <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
                  I can't log in.
                </div>
              </div>
            </div>
            <div className="flex items-center p-6 pt-0">
              <form className="flex w-full items-center space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                  id="message"
                  placeholder="Type your message..."
                  autoComplete="off"
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10"
                  type="submit"
                  disabled={false}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <line x1="22" x2="11" y1="2" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  <span className="sr-only">Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
