import { i18n } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

const PaymentButtons = () => {
  const router = useRouter();
  const query = router.query;
  const id = (query.id as string) ?? 1;
  return (
    <div className="study__payment__buttons d-flex justify-content-between align-items-center">
      <Link href={"/"} className={`btn btn-send btn-light`} scroll={true}>
        <span className="text">{i18n?.t("common:Back")}</span>
      </Link>
      <button
        className="btn btn-send btn-green"
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#modal-add-favourite-${id}`}
      >
        {i18n?.t("common:Push")}
      </button>
    </div>
  );
};

export default PaymentButtons;
