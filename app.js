console.log('Is this working?');

let viz;

// Tableau Public URL
const url = "https://public.tableau.com/views/PRA2Visualization-SergioValbuena-40Yearsofcancerstudies/40YEARSOFCANCERSTUDIES?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link";

const vizContainer = document.getElementById('vizContainer');

function getOptions() {
    return {
        hideTabs: true,
        width: vizContainer.offsetWidth,
        height: vizContainer.offsetHeight,
        onFirstInteraction: function () {
            const workbook = viz.getWorkbook();
            const activeSheet = workbook.getActiveSheet();
            console.log("My dashboard is interactive");
        }
    };
}

// Create and load the viz
function initViz() {
    console.log('Executing the initViz function!');
    viz = new tableau.Viz(vizContainer, url, getOptions());
}

// Reinitialize viz on window resize
window.addEventListener("resize", () => {
    if (viz) {
        viz.dispose();
    }
    initViz();
});

document.addEventListener("DOMContentLoaded", initViz);

// Export PDF
const exportPDF = document.getElementById('exportPDF');
exportPDF.addEventListener("click", () => {
    viz.showExportPDFDialog();
});

// Export Image
const exportImage = document.getElementById('exportImage');
exportImage.addEventListener("click", () => {
    viz.showExportImageDialog();
});