import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Dropdown } from 'primereact/dropdown';

export function LoadingDoc(props) {
    const code = {
        basic: `
<Dropdown loading placeholder="Loading..." className="w-full md:w-56" />
        `,
        javascript: `
import React from "react";
import { Dropdown } from 'primereact/dropdown';

export default function LoadingDemo() {

    return (
      <Dropdown loading placeholder="Loading..." className="w-full md:w-56" />
    )
}
        `,
        typescript: `
import React from "react";
import { Dropdown } from 'primereact/dropdown';

export default function LoadingDemo() {

    return (
        <div className="card flex justify-center">
          <Dropdown loading placeholder="Loading..." className="w-full md:w-56" />“
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Loading state can be used <i>loading</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-center">
                <Dropdown loading placeholder="Loading..." className="w-full md:w-56" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
