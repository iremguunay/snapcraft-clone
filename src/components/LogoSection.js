import './styles.css'
import { Col, Link, Row } from "@canonical/react-components";

const LogoSection = () => {
  return (
    <div className="p-strip">
      <Row className="u-fixed-width">
        <h2 className="p-muted-heading">
          Official snaps from major publishers
        </h2>
      </Row>
      <Row>
        <Col small={2} medium={3} size={2}>
          <Link href="https://snapcraft.io/firefox">
            <img
              src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_292,h_290/https://assets.ubuntu.com/v1/aae93857-logo-mozilla--snapcraft-homepage.svg"
              width={146}
              height={145}
              alt="Mozilla"
            />
          </Link>
        </Col>
        <Col small={2} medium={3} size={2}>
          <Link href="https://snapcraft.io/publisher/kde">
            <img
              src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_292,h_290/https://assets.ubuntu.com/v1/6958a93e-kde-logo-snapcraft-homepage.svg"
              width={146}
              height={145}
              alt="KDE"
            />
          </Link>
        </Col>
        <Col small={2} medium={3} size={2}>
          <Link href="https://snapcraft.io/publisher/jetbrains">
            <img
              src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_292,h_290/https://assets.ubuntu.com/v1/55f6dae7-logo-jetbrains--snapcraft-homepage.svg"
              width={146}
              height={145}
              alt="JetBrains"
            />
          </Link>
        </Col>
        <Col small={2} medium={3} size={2}>
          <Link href="https://snapcraft.io/spotify">
            <img
              src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_292,h_290/https://assets.ubuntu.com/v1/63d5fd3f-logo-spotify--snapcraft-homepage.svg"
              width={146}
              height={145}
              alt="Spotify"
            />
          </Link>
        </Col>
        <Col small={2} medium={3} size={2}>
          <Link href="https://snapcraft.io/google-cloud-sdk">
            <img
              src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_292,h_290/https://assets.ubuntu.com/v1/2d54fa27-logo-google--snapcraft-homepage.svg"
              width={146}
              height={145}
              alt="Google"
            />
          </Link>
        </Col>
        <Col small={2} medium={3} size={2}>
          <Link href="https://snapcraft.io/code">
            <img
              src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_292,h_290/https://assets.ubuntu.com/v1/7b03d4b8-logo-microsoft--snapcraft-homepage.svg"
              width={146}
              height={145}
              alt="Microsoft"
            />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default LogoSection;
