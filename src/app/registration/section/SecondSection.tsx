export default function SecondSection() {
    return (
        <div className="w-full min-h-screen bg-white relative">
            <div className="w-[310px] h-[75px] bg-[#111826] text-white absolute left-80 top-10 text-center z-5 text-[45px]">ELIGIBILITY</div>
            <div className="w-[310px] h-[75px] bg-[#111826] text-white absolute right-80 top-20 text-center z-5 text-[45px]">CRITERIA</div>
            <div className="w-[500px] h-[500px] border border-[1px] border-[#111826] absolute left-55 top-20">
                <div className="w-[400px] h-[420px] mt-20 ml-10 flex flex-col item-center justify-around">
                    <p>The submission is open for any projects:</p>
                    <ul className="list-disc ml-10">
                        <li>Related to hoteliers, hotel developers and managers, recreations and destinations, cruises and yachts, excursions and transportations, airlines and airports.</li>
                        <li>Located across Asia.</li>
                        <li>Is completed, uncompleted, or in conceptual stage but has been granted approval.</li>
                    </ul>
                    <p>Award-winning projects in other competitions are eligible to participate.</p>
                    <p>Participant can submit single or multiple projects in an unlimited number of entries.</p>
                </div>
            </div>
            <div className="w-[500px] h-[500px] border border-[1px] border-[#111826] absolute right-55 top-30">
                <div className="w-[400px] h-[420px] mt-20 ml-10 flex flex-col item-center ">
                    <p>The judging process evaluates each nomination based on 5 criteria:</p>
                    <ul className="list-disc ml-10 mt-15">
                        <li>Authenticity</li>
                        <li>Customer Satisfaction Review</li>
                        <li>Online Presence / Engagement</li>
                        <li>Quality of Service</li>
                        <li>Corporate Social Responsibility</li>

                    </ul>
                </div>
            </div>

        </div>
    );
}