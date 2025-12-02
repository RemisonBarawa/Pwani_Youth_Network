import Footer from "../components/Footer";
import Header from "../components/Header";
import { Download, FileText, TrendingUp, Users, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

// Function to parse the text file data
function parseReportData(data: string) {
  const sections: Record<string, string> = {};
  let currentSection = "";
  let currentContent: string[] = [];

  const lines = data.split("\n");
  
  for (const line of lines) {
    if (line.trim() === "") continue;
    
    // Check if it's a section header (all caps or title case)
    if (line.match(/^[A-Z\s&]+$/) && line.length > 3 && !line.includes("=")) {
      if (currentSection) {
        sections[currentSection] = currentContent.join("\n");
      }
      currentSection = line.trim();
      currentContent = [];
    } else if (currentSection) {
      currentContent.push(line);
    }
  }
  
  if (currentSection) {
    sections[currentSection] = currentContent.join("\n");
  }
  
  return sections;
}

// Function to generate PDF content
function generatePDFContent(data: string): string {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; }
          h1 { color: #008080; border-bottom: 3px solid #008080; padding-bottom: 10px; }
          h2 { color: #008080; margin-top: 30px; }
          h3 { color: #333; margin-top: 20px; }
          .header { text-align: center; margin-bottom: 30px; }
          .section { margin-bottom: 25px; }
          .stats { background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
          th { background-color: #008080; color: white; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>PWANI YOUTH NETWORK</h1>
          <h2>Annual Impact Report 2024</h2>
          <p>Generated: ${new Date().toLocaleDateString()}</p>
        </div>
        <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${data}</pre>
      </body>
    </html>
  `;
}

// Function to download as PDF
function downloadPDF(data: string) {
  const content = generatePDFContent(data);
  const blob = new Blob([content], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `PYN_Annual_Report_2024_${new Date().toISOString().split("T")[0]}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  // For actual PDF, you would need a library like jsPDF or html2pdf
  // This creates an HTML file that can be printed to PDF
  alert("Report downloaded! Open the file and use 'Print to PDF' to save as PDF.");
}

export default function ReportsPage() {
  const [reportData, setReportData] = useState<string>("");
  const [parsedSections, setParsedSections] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the text file from public folder
    fetch("/reportsData.txt")
      .then((response) => {
        if (!response.ok) {
          // If file not found, use fallback data
          return fetch("/reportsData.txt").catch(() => {
            // Use inline data as fallback
            return {
              text: () =>
                Promise.resolve(`PYN ANNUAL IMPACT REPORT 2024
================================

ORGANIZATION: Pwani Youth Network
REPORTING PERIOD: January 2024 - December 2024
DATE GENERATED: January 2025

EXECUTIVE SUMMARY
-----------------
Pwani Youth Network continued to expand its impact across Coastal Kenya in 2024, 
reaching over 15,000 young people through comprehensive programs.

KEY ACHIEVEMENTS
---------------
- Total Youth Reached: 15,247
- Counties Covered: 6
- Programs Active: 12
- Community Partners: 45
- Volunteers Engaged: 320`),
            };
          });
        }
        return response;
      })
      .then((response) => response.text())
      .then((data) => {
        setReportData(data);
        setParsedSections(parseReportData(data));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading report:", error);
        // Use fallback data
        const fallbackData = `PYN ANNUAL IMPACT REPORT 2024
================================

ORGANIZATION: Pwani Youth Network
REPORTING PERIOD: January 2024 - December 2024

KEY ACHIEVEMENTS
---------------
- Total Youth Reached: 15,247
- Counties Covered: 6
- Programs Active: 12`;
        setReportData(fallbackData);
        setParsedSections(parseReportData(fallbackData));
        setLoading(false);
      });
  }, []);

  const keyStats = [
    { label: "Youth Reached", value: "15,247", icon: <Users size={24} /> },
    { label: "Counties", value: "6", icon: <TrendingUp size={24} /> },
    { label: "Programs", value: "12", icon: <FileText size={24} /> },
    { label: "Year", value: "2024", icon: <Calendar size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 sm:pt-32">
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
              Media
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-kenya-black">
              Reports & Analytics
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive data and insights into our impact and programs
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Key Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {keyStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-kenya-green to-coast-palm rounded-2xl p-6 text-white shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {stat.icon}
                    <p className="text-sm uppercase tracking-wide opacity-90">
                      {stat.label}
                    </p>
                  </div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Download Button */}
            <div className="mb-12 text-center">
              <button
                onClick={() => downloadPDF(reportData)}
                className="bg-kenya-green text-white px-8 py-4 rounded-full font-semibold hover:bg-kenya-green/90 transition-all transform hover:translate-y-[-2px] shadow-xl flex items-center gap-3 mx-auto"
              >
                <Download size={24} />
                Download Full Report (PDF)
              </button>
            </div>

            {/* Report Content */}
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading report data...</p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-kenya-black mb-4">
                    Annual Impact Report 2024
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-kenya-red to-kenya-green"></div>
                </div>

                <div className="space-y-8">
                  {Object.entries(parsedSections).map(([section, content]) => (
                    <div key={section} className="border-b border-gray-200 pb-6 last:border-0">
                      <h3 className="text-2xl font-bold text-kenya-green mb-4">
                        {section}
                      </h3>
                      <pre className="text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                        {content}
                      </pre>
                    </div>
                  ))}
                  
                  {Object.keys(parsedSections).length === 0 && (
                    <div className="space-y-6">
                      <pre className="text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                        {reportData}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Additional Reports Section */}
            <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-kenya-black mb-8 text-center">
                Additional Reports
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <FileText className="text-kenya-green mb-4" size={32} />
                  <h3 className="font-bold text-gray-800 mb-2">Quarterly Reports</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Detailed quarterly breakdowns of program activities and outcomes
                  </p>
                  <button className="text-kenya-green text-sm font-semibold hover:underline">
                    Coming Soon →
                  </button>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <TrendingUp className="text-coast-ocean mb-4" size={32} />
                  <h3 className="font-bold text-gray-800 mb-2">Impact Analytics</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Data-driven insights and visualizations of our community impact
                  </p>
                  <button className="text-kenya-green text-sm font-semibold hover:underline">
                    Coming Soon →
                  </button>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <Users className="text-kenya-red mb-4" size={32} />
                  <h3 className="font-bold text-gray-800 mb-2">Success Stories</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    In-depth case studies of individuals and communities transformed
                  </p>
                  <button className="text-kenya-green text-sm font-semibold hover:underline">
                    Coming Soon →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

