import { ReactNode } from "react";

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <div className="container-fluid px-0">
            {children}
        </div>
    );
};

export default DefaultLayout;