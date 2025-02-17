import {Button, Container, Menu} from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {
    const {activityStore} = useStore()
    return (
            <Menu inverted fixed="top" style={{ height: '50px', lineHeight: '50px' }}>
                <Container
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0',
                    }}
                >
                    <Menu.Item header style={{ padding: '5px 10px' }}>
                        <img src="/assets/logo.png" alt="logo" style={{ marginRight: '5px', height: '30px' }} />
                        Reactivities
                    </Menu.Item>
                    <Menu.Item name="Activities" style={{ padding: '5px 10px' }} />
                    <Menu.Item style={{ padding: '5px 10px' }}>
                        <Button onClick={() => activityStore.openForm()} positive content="Create Activity" style={{ padding: '5px 10px' }} />
                    </Menu.Item>
                </Container>
            </Menu>



    )
}