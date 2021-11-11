import { Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { Bands } from "../../../types/Bands";

/**
 * Return the members of a specific band in a inline dotted-separated text format component.
 */
const Members:React.FC<{members:Bands.MemberType[]|undefined}> = ({members}):JSX.Element => {

    const [membersString, setMembersString] = useState<string>("");

    const createMembersString = () => {

        let string = "";

        if (members) {

            members.forEach((member, i) => {
                
                if (members[i + 1]) {

                    string = string + `${member.name} · `;

                } else {

                    string = string + member.name;

                }

            });

            setMembersString(string);

        }

    }

    useEffect(() => createMembersString(), [members]);

    return(
        <Typography sx={{
            color: indigo[900]
        }} fontWeight="bold" mb={3}>
            {membersString}
        </Typography>
    );

}

export default Members;