import {Button, Container, Menu} from "semantic-ui-react";
interface Props {
    openForm: () => void;
}

export default function NavBar({ openForm }: Props) {
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
                        <Button onClick={openForm} positive content="Create Activity" style={{ padding: '5px 10px' }} />
                    </Menu.Item>
                </Container>
            </Menu>



    )
}