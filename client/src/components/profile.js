import { StyledProfile, StyledProfileInfo, StyledProfileEventContainer } from "./styles/profile.styled"
import { Icon } from "@iconify/react";
import { useQuery } from "@apollo/client"
// change to query user or query me to populate user's events
import { QUERY_EVENTS } from "../utils/queries";
import EventList from "./EventList";

export default function Profile() {
    const { data, loading } = useQuery(QUERY_EVENTS);

    if (loading) {
        return <div>Loading...</div>
    }

    const eventData = data?.events || [];

    return (
        <StyledProfile>
            <StyledProfileInfo>
                <Icon icon="akar-icons:person" />
                    <h3>Username</h3>
                    <h3>Description: Welcome to my profile!</h3>
            </StyledProfileInfo>
            <StyledProfileEventContainer>
                <EventList events={eventData} />
            </StyledProfileEventContainer>
        </StyledProfile>
    )
}