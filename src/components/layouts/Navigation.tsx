import styled from "@emotion/styled";
import Link from "next/link";
import { ROUTES } from "../../constants";

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
  SUBS?: Array<ROUTE>;
}

export const Navigation = () => {
  return (
    <header>
      <NaviNav>
        {ROUTES.map((routeObject: ROUTE) => {
          return (
            <NaviCont key={`main-menu-${routeObject.ID}`}>
              <NaviTit>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
              </NaviTit>
                {routeObject.SUBS &&
                  routeObject.SUBS.map((subRouteObject: ROUTE) => {
                    return (
                      <NaviMenu key={`sub-menu-${routeObject.ID}`}>
                        <Link
                          href={`${routeObject.PATH}${subRouteObject.PATH}`}
                        >
                          <a>{subRouteObject.LABEL}</a>
                        </Link>
                      </NaviMenu>
                    );
                  })}
            </NaviCont>
          );
        })}
      </NaviNav>
    </header>
  );
};

const NaviNav = styled.nav`
	padding: 0 1rem;
	border-bottom: 1px solid #DDD;
`

const NaviCont = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 auto;
`

const NaviTit = styled.h1`
    margin-right: auto;
    font-size: 1.8rem;
`

const NaviMenu = styled.div`
    font-size: 1.1rem;
    margin-left: 2em;
`



