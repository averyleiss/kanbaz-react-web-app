// import { FaPlus } from "react-icons/fa6";
// import GreenCheckmark from "./GreenCheckmark";
// import { Button, Dropdown } from "react-bootstrap";

// export default function ModulesControls() {
//   return (
//     <div id="wd-modules-controls" className="text-nowrap d-flex justify-content-between align-items-center mb-3">
//       {/* Add Module Button */}
//       <Button variant="danger" size="lg" className="me-1" id="wd-add-module-btn">
//         <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//         Module
//       </Button>

//       {/* Publish All Dropdown */}
//       <Dropdown>
//         <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
//           <GreenCheckmark /> Publish All
//         </Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item id="wd-publish-all">
//             <GreenCheckmark /> Publish All
//           </Dropdown.Item>
//           <Dropdown.Item id="wd-publish-all-modules-and-items">
//             <GreenCheckmark /> Publish all modules and items
//           </Dropdown.Item>
//           <Dropdown.Item id="wd-publish-modules-only">
//             <GreenCheckmark /> Publish modules only
//           </Dropdown.Item>
//           <Dropdown.Item id="wd-unpublish-all-modules-and-items">
//             Unpublish all modules and items
//           </Dropdown.Item>
//           <Dropdown.Item id="wd-unpublish-modules-only">
//             Unpublish modules only
//           </Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>

//       {/* View Progress and Collapse All Buttons */}
//       <div className="d-flex">
//         <Button variant="secondary" size="lg" className="me-2" id="wd-view-progress">
//           View Progress
//         </Button>
//         <Button variant="secondary" size="lg" id="wd-collapse-all">
//           Collapse All
//         </Button>
//       </div>
//     </div>
//   );
// }


import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import { MdDoNotDisturbAlt } from "react-icons/md";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      {/* Add Module Button */}
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>

      {/* Publish All Dropdown */}
      <Dropdown className="float-end me-2">
        <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
          <MdDoNotDisturbAlt /> Unpublish all modules and items 
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only">
          <MdDoNotDisturbAlt /> Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* View Progress & Collapse All Buttons */}
      <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-view-progress">
        View Progress
      </Button>
      <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-collapse-all">
        Collapse All
      </Button>
    </div>
  );
}

