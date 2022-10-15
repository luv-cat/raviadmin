import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
    <div className="featured">
        <div className="featuredItem">
            <sapn className="featuredTitle">Revanue</sapn>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">
                    -11.4 
                    <ArrowDownward className="featuredIcon negative" />
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <sapn className="featuredTitle">Sales</sapn>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate">
                    -1.4 
                    <ArrowDownward className="featuredIcon negative" />
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <sapn className="featuredTitle">Cost</sapn>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,225</span>
                <span classNaAme="featuredMoneyRate">
                    +11.4 
                    <ArrowUpward className="featuredIcon" />
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        
    </div>
    )
}
