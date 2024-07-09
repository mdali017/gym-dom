import * as Tabs from "@radix-ui/react-tabs";
const TabSection = () => {
  const tabItems = [
    "Overview",
    "Features",
    "Review",
    "Benefits",
    "plans",
  ];
  return (
    <div>
      <Tabs.Root
        className="max-w-screen-xl mx-auto px-4 md:px-8"
        defaultValue="Overview"
      >
        <Tabs.List
          className="w-full border-b flex items-center gap-x-3 overflow-x-auto text-sm"
          aria-label="Manage your account"
        >
          {tabItems.map((item, idx) => (
            <Tabs.Trigger
              key={idx}
              className="group outline-none py-1.5 border-b-2 border-white text-gray-500 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
              value={item}
            >
              <div className="py-1.5 px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium">
                {item}
              </div>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabItems.map((item, idx) => (
          <Tabs.Content key={idx} className="py-6" value={item}>
            <p className="text-xs leading-normal">
              This is <b>{item}</b> Tab
            </p>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};

export default TabSection;
