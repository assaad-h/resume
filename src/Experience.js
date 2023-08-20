import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

function MyExperience() {
    return (
        <div className="Experience">
            <Container fluid className="block-example border rounded border-dark" >
                <h1 style = {{padding: '10px'}}>Experience</h1>
                <div>
                    <Table responsive="lg">
                        <thead>
                        <tr>
                            <th>Start Date - End Date</th>
                            <th>Job Title</th>
                            <th>Company</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Jan 2023 - Present</td>
                            <td>Software Engineer</td>
                            <td>Cisco</td>
                            <td>
                                <ul>
                                    <li>Developed enhancements and fixes in the Forwarding Information Base (FIB) code for IOS XR Routers.</li>
                                    <li>Integrated a crucial bug fix into production code for esteemed clients including Google, Verizon, and AT&T, adhering to rigorous quality standards.</li>
                                    <li>Worked on quality improvement items such as memory leaks and Valgrind reported errors, augmenting software robustness and performance benchmarks.</li>
                                    <li>Actively participated in FIB issue triages, displaying adeptness in collaborative problem-solving and efficient resolution strategies.</li>
                                    <li>Cultivated a deeper knowledge and understanding of networking.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>May 2022 - Aug 2022</td>
                            <td>Software Developer</td>
                            <td>Trend Micro</td>
                            <td>
                                <ul>
                                    <li>Developed code on the Workload Security side of the Cloud One product</li>
                                    <li>Engaged in the development and validation of API enhancements, leveraging Postman as a testing conduit.</li>
                                    <li>Participated in the validation of database refinements, employing DBeaver for comprehensive testing.</li>
                                    <li>Used Amazon Web Services platform to build the product and ensure the functionality of my code changes.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Sep 2021 - Dec 2021</td>
                            <td>Modem Electro-Optics Firmware Designer</td>
                            <td>Ciena</td>
                            <td>
                                <ul>
                                    <li>Engineered a performance monitoring tool for the ARM processor within the company's product line. Utilized C programming to extract CPU operational metrics.</li>
                                    <li>Conceived and actualized a user-interface with HTML/CSS and JavaScript facilitating data retrieval from the tool.</li>
                                    <li>Developed a tool to send "teas" commands to the WaveLogic 5 Nano optical plug and WaveLogic 5 Extreme modem leveraging Python programming and UDP/IP protocol.</li>
                                    <li>The "teas" commands include alarm status retrieval, upgrade functionality and the control of the performance monitoring unit tool.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Jan 2021 - Apr 2021</td>
                            <td>Real-Time Embedded Software Developer</td>
                            <td>Ciena</td>
                            <td>
                                <ul>
                                    <li>Engineered Command Data Block (CDB) commands within customer evaluation platforms, employing C programming to establish an interaction with the WaveLogic 5 Nano (WL5n) optical plugs.</li>
                                    <li>Crafted CDB commands, enabling upgrade functionality of the plug as well as the provisioning, and configuration of EMI ports and IP settings of the plug.</li>
                                    <li>Implemented the software for the I2C driver, allowing the transmission of CDB commands between the evaluation platform and the WL5n plug via the I2C bus.</li>
                                    <li>Adhered to the CMIS specifications for the CDB software</li>
                                    <li>Developed software for the binning of the Performance Monitoring Variables (PMs) of the WL5n plug which also used the I2C driver.</li>
                                    <li>Ensured thread safety with the use of semaphores which considers the contention for the I2C driver.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>May 2020 - Dec 2020</td>
                            <td>Optical Microsystems - Product Verification</td>
                            <td>Ciena</td>
                            <td>
                                <ul>
                                    <li>Developed entire test automation suite for the second release of the WaveLogic 5 Extreme (WL5e) leveraging Python and the ROBO framework.</li>
                                    <li>Automation tests included byte count testing, robustness testing and fault injection testing.</li>
                                    <li>Accomplished First Product Evaluation (FPE) testing on WL5e module before shipment to customer.</li>
                                    <li>Scripted the logic for the LEDs of the customer product evaluation boards using C programming.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Jun 2017 - Aug 2017</td>
                            <td>Product Verification</td>
                            <td>Ross Video</td>
                            <td>
                                <ul>
                                    <li>Used Bugzilla to report issues and bugs found in company products during development.</li>
                                    <li>Operated Testopia to create a test plan that verifies multiple functionalities of a product.</li>
                                    <li>Scripted automation tests in TCL to verify if a specific card works properly in DashBoard (a software-based control system).</li>
                                    <li>Created a program that efficiently follows SNMP protocol.</li>
                                    <li>Ran manual tests using an oscilloscope to verify the functioning of multiple company products.</li>
                                    <li>Debugged prototype cards that were not functioning properly.</li>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
}

export default MyExperience;