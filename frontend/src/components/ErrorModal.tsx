import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useGlobalContext } from "../GlobalState";

const ErrorModal = ({ message }: { message: String }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Error has occured
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {message}
                </Typography>
            </Box>
        </Modal>
    );
};

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    color: "#fff",
    p: 4,
};

export default ErrorModal;
