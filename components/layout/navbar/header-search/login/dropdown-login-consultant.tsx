import { StepsToken } from "@/api/variables";
import { deleteCookie } from "cookies-next";
import { i18n } from "next-i18next";
import Link from "next/link";

type TypeProps = {
  Image: string | undefined;
};

function DropdownLoginConsultant(props: TypeProps) {
  const { Image } = props;
  const ImageError =
    "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";

  const Logout = async () => {
    // Headr Request Api
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.append("Accept", "application/json");
    requestHeaders.append("Accept-Language", "ar");
    requestHeaders.append(
      "Authorization",
      `Bearer ${JSON.parse(JSON.stringify(StepsToken))}`
    );
    await fetch(`${process.env.BACKEND_URL}logout`, {
      method: "POST",
      headers: requestHeaders,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        deleteCookie("steps_token");
        deleteCookie("steps_user_type_id");
        deleteCookie("steps_user_type_name");
        window.location.reload();
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuconsultant"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src={Image ? Image : ImageError} alt="steps Logo" />
      </button>

      <ul className={`dropdown-menu`} aria-labelledby="dropdownMenuconsultant">
        <li>
          <Link href="/myprofile/account">
            {i18n?.t("common:ProfilePersonly")}
          </Link>
        </li>
        <li>
          <Link href={`/myprofile/my-requests/${1}`}>
            {i18n?.t("common:ConsultationRequests")}
          </Link>
        </li>
        <li>
          <Link href={`/myprofile/my-past-requests/${1}`}>
            {i18n?.t("common:PreviousConsultations")}
          </Link>
        </li>
        <li>
          <Link href={`/myprofile/my-studies-sale/${1}`}>
            {i18n?.t("common:StudiesForSale")}
          </Link>
        </li>
        <li>
          <Link href="/myprofile/my-wallet">{i18n?.t("common:Wallet")}</Link>
        </li>
        <li>
          <button className="btn btn-logout" type="button" onClick={Logout}>
            {i18n?.t("common:logout")}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DropdownLoginConsultant;
