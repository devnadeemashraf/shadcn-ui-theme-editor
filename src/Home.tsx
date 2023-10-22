/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Copy, Pen } from "lucide-react";
import { convertHSLtoHEX } from "./lib/utils";
import { getCurrentValueForProperty } from "./lib/theme";

const Home = () => {
  const [background, setBackground] = useState(
    getCurrentValueForProperty("background")
  );
  const [foreground, setForeground] = useState(
    getCurrentValueForProperty("foreground")
  );

  const [card, setCard] = useState(getCurrentValueForProperty("card"));
  const [cardForeground, setCardForeground] = useState(
    getCurrentValueForProperty("cardForeground")
  );

  const [popover, setPopover] = useState(getCurrentValueForProperty("popover"));
  const [popoverForeground, setPopoverFroreground] = useState(
    getCurrentValueForProperty("popoverForeground")
  );

  const [primary, setPrimary] = useState(getCurrentValueForProperty("primary"));
  const [primaryForeground, setPrimaryForeground] = useState(
    getCurrentValueForProperty("primaryForeground")
  );

  const [secondary, setSecondary] = useState(
    getCurrentValueForProperty("secondary")
  );
  const [secondaryForeground, setSecondaryForeground] = useState(
    getCurrentValueForProperty("secondaryForeground")
  );

  const [muted, setMuted] = useState(getCurrentValueForProperty("muted"));
  const [mutedForeground, setMutedForeground] = useState(
    getCurrentValueForProperty("mutedForeground")
  );

  const [accent, setAccent] = useState(getCurrentValueForProperty("accent"));
  const [accentForeground, setAccentForeground] = useState(
    getCurrentValueForProperty("accentForeground")
  );

  const [destructive, setDestructive] = useState(
    getCurrentValueForProperty("destructive")
  );
  const [destructiveForeground, setDestructiveForeground] = useState(
    getCurrentValueForProperty("destructiveForeground")
  );

  const [border, setBorder] = useState(getCurrentValueForProperty("border"));
  const [input, setInput] = useState(getCurrentValueForProperty("input"));
  const [ring, setRing] = useState(getCurrentValueForProperty("ring"));

  const [radius, setRadius] = useState(getCurrentValueForProperty("radius"));

  useEffect(() => {
    console.log(getCurrentValueForProperty("background"));
  }, []);

  return (
    <main className="max-w-[1280px] w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full h-full grid grid-cols-2">
        {/* Sidebar */}
        <aside className="max-w-[320px] bg-background border-r overflow-y-auto">
          <header className="sticky top-0 bg-background border-b w-full h-16 flex items-center justify-between gap-2 px-2">
            {/* Edit Theme */}
            <Button variant="secondary" className="w-full">
              <Pen className="w-4 h-4 mr-2" />
              Edit Theme
            </Button>
            {/* Copy Code */}
            <Button className="w-full">
              <Copy className="w-4 h-4 mr-2" />
              Copy Code
            </Button>
          </header>
          <div className="px-2 space-y-2 my-2">
            {/* Primary */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Primary</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(primary)}`}
              />
            </div>
            {/* Primary Foreground */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Primary Foreground</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(primaryForeground)}`}
              />
            </div>

            {/* Secondary */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Secondary</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(secondary)}`}
              />
            </div>
            {/* Secondary Foreground */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Secondary Foreground</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(secondaryForeground)}`}
              />
            </div>

            {/* Background */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Background</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(background)}`}
              />
            </div>
            {/* Foreground */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Foreground</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(foreground)}`}
              />
            </div>

            {/* Card */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Card</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(card)}`}
              />
            </div>
            {/* Card Foreground */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Card Foreground</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(cardForeground)}`}
              />
            </div>

            {/* Popover */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Popover</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(popover)}`}
              />
            </div>
            {/* Popover Foreground */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Popover Foreground</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(popoverForeground)}`}
              />
            </div>

            {/* Muted */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Muted</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(muted)}`}
              />
            </div>
            {/* Muted Foreground */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Muted Foreground</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(mutedForeground)}`}
              />
            </div>

            {/* Accent */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Accent</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(accent)}`}
              />
            </div>
            {/* Accent Foreground */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Accent Foreground</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(accentForeground)}`}
              />
            </div>

            {/* Destructive */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Destructive</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(destructive)}`}
              />
            </div>
            {/* Destructive Foreground */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Destructive Foreground</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(destructiveForeground)}`}
              />
            </div>

            {/* Border */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Border</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(border)}`}
              />
            </div>

            {/* Input */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Input</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(input)}`}
              />
            </div>

            {/* Ring */}
            <div className="flex items-center justify-center">
              <span className="flex-1">Ring</span>
              <input
                id="color-swatch"
                type="color"
                value={`${convertHSLtoHEX(ring)}`}
              />
            </div>
          </div>
        </aside>
        {/* Contents */}
        <div className="max-w-[320px] rounded-lg border bg-card text-card-foreground shadow-sm">
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
                <p className="text-sm font-medium leading-none">Sofia Davis</p>
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
    </main>
  );
};

export default Home;
