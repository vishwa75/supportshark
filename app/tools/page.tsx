export default function Home() {
 
    const ToolS = [
    { id: 1, name: 'XML' },
    { id: 2, name: 'JSON' },
    { id: 3, name: 'CSV' },
    { id: 4, name: 'YAML' },
    { id: 5, name: 'HTML' },
    { id: 6, name: 'Markdown' },
    { id: 7, name: 'Regex' },
    { id: 8, name: 'Base64' },
    {id: 9, name: 'JWT' },
  ];
 
    return (
    <section className="mx-auto max-w-6xl px-6 py-24">

 

        <div className="mx-auto max-w-2xl text-center">
            This is the tool page for SupportShark, a developer and production support toolkit. Here you can find information about the available tools, their usage, and how to contribute.    
      </div>

        <ul className="mt-6 max-w-2xl text-lg text-gray-600">
            {ToolS.map((tool) => (
                <li key={tool.id}>{tool.name}</li>
                  
            ))}

          
        </ul>

          {ToolS.map((tool) => (
            <button  key={tool.id} className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white space-between">
                    Explore {tool.name} Tool
                </button> 
                 ))}

    </section>
  );
}