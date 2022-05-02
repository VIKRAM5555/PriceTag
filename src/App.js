import "./styles.css";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function App() {
  return (
    <div className="App">
      <Price
        c={`Single User,
5GB Storage,
Unlimited Public Projects,
Community Access`}
        d={`Unlimited Private Projects,
             Dedicated Phone Support,
             Free Subdomain,
             Monthly Status Reports`}
        s={"Free"}
        r={"$0"}
      />

      <Price
        c={`5 Users,
50GB Storage,
Unlimited Public Projects,
Community Access,
Unlimited Private Projects,
Dedicated Phone Support,
Free Subdomain`}
        d={`Monthly Status Reports`}
        s={"Plus"}
        r={"$9"}
      />

      <Price
        c={`Unlimited Users,
          150GB Storage,
          Unlimited Public Projects,
          Community Access,
          Unlimited Private Projects,
          Dedicated Phone Support,
          Unlimited Free Subdomains,
          Monthly Status Reports`}
        s={"Pro"}
        r={"$49"}
      />
    </div>
  );
}

function Price({ c, d, s, r }) {
  const Benefit = c.split(",");

  const Benefit1 = d ? d.split(",") : [];
  console.log(Benefit);
  return (
    <div className="Page">
      <div className="div1">
        <p>{s}</p>
        <p>
          <h1>{r}</h1> /month
        </p>
      </div>

      <div className="div2">
        {Benefit.map((a) => (
          <p>
            <CheckCircleIcon />
            {a}
          </p>
        ))}
        {Benefit1.map((a) => (
          <p>
            <CancelIcon />
            {a}
          </p>
        ))}
      </div>
      <Button variant="contained" color="success">
        BUTTON
      </Button>
    </div>
  );
}
