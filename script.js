// =============================================
// Unpaid Leave Tracker - Multi Employee Version
// =============================================


// =============================================
// Elements
// =============================================

const employeeSelect =
    document.getElementById("employeeSelect");

const addEmployeeButton =
    document.getElementById("addEmployeeButton");

    const editEmployeeButton =
    document.getElementById("editEmployeeButton");

const deleteEmployeeButton =
    document.getElementById("deleteEmployeeButton");

const employeeFormCard =
    document.getElementById("employeeFormCard");

const employeeFormTitle =
    document.getElementById("employeeFormTitle");

const employeeNameInput =
    document.getElementById("employeeName");

const employeeNumberInput =
    document.getElementById("employeeNumber");

const employeeStartTimeInput =
    document.getElementById("employeeStartTime");

const employeeEndTimeInput =
    document.getElementById("employeeEndTime");

const employeeLunchStartInput =
    document.getElementById("employeeLunchStart");

const employeeLunchEndInput =
    document.getElementById("employeeLunchEnd");

const saveEmployeeButton =
    document.getElementById("saveEmployeeButton");

const cancelEmployeeButton =
    document.getElementById("cancelEmployeeButton");

const entryTypeInput =
    document.getElementById("entryType");

const attendanceDateInput =
    document.getElementById("attendanceDate");

const actualArrivalInput =
    document.getElementById("actualArrival");

const notesInput =
    document.getElementById("notes");

const saveEntryButton =
    document.getElementById("saveEntryButton");

const editEntryModal =
    document.getElementById("editEntryModal");

const editEntryDateInput =
    document.getElementById("editEntryDate");

const editEntryTypeInput =
    document.getElementById("editEntryType");

const editEntryArrivalInput =
    document.getElementById("editActualArrival");

const editEntryNotesInput =
    document.getElementById("editEntryNotes");

const cancelEditEntryButton =
    document.getElementById("cancelEditEntryButton");

const updateEntryButton =
    document.getElementById("updateEntryButton");    

const monthFilterInput =
    document.getElementById("monthFilter");

    // =========================================
// Main Navigation
// =========================================

const unpaidLeaveNavButton =
    document.getElementById("unpaidLeaveNavButton");

const carWashNavButton =
    document.getElementById("carWashNavButton");

const unpaidLeaveSection =
    document.getElementById("unpaidLeaveSection");

const carWashSection =
    document.getElementById("carWashSection");

    const carWashEmployeeNameInput =
    document.getElementById("carWashEmployeeName");

const carWashDateInput =
    document.getElementById("carWashDate");

const carWashVehicleTypeInput =
    document.getElementById("carWashVehicleType");

const carWashAmountInput =
    document.getElementById("carWashAmount");

const saveCarWashButton =
    document.getElementById("saveCarWashButton");

    const carWashTableBody =
    document.getElementById("carWashTableBody");

    const carWashPayrollMonthInput =
    document.getElementById("carWashPayrollMonth");

    const carWashHistoryMonthInput =
    document.getElementById("carWashHistoryMonth");

    const carWashHistorySearchInput =
    document.getElementById("carWashHistorySearch");

    const carWashHistorySummaryText =
    document.getElementById("carWashHistorySummaryText");

const carWashPayrollTableBody =
    document.getElementById("carWashPayrollTableBody");

    const carWashTotalWashes =
    document.getElementById("carWashTotalWashes");

const carWashOutstandingWashes =
    document.getElementById("carWashOutstandingWashes");

const carWashTotalValue =
    document.getElementById("carWashTotalValue");

const carWashOutstandingValue =
    document.getElementById("carWashOutstandingValue");

    const markAllCarWashesLoadedButton =
    document.getElementById(
        "markAllCarWashesLoadedButton"
    );

    const printCarWashPayrollButton =
    document.getElementById("printCarWashPayrollButton");

const daysLateElement =
    document.getElementById("daysLate");

const totalLateTimeElement =
    document.getElementById("totalLateTime");

const fullDaysUnpaidElement =
    document.getElementById("fullDaysUnpaid");

const fullDayUnpaidHoursElement =
    document.getElementById("fullDayUnpaidHours");

const unpaidHoursElement =
    document.getElementById("unpaidHours");

const unpaidDaysElement =
    document.getElementById("unpaidDays");

const attendanceTableBody =
    document.getElementById("attendanceTableBody");

    const allEmployeesSummaryBody =
    document.getElementById("allEmployeesSummaryBody");

    const allEmployeesPayrollPeriod =
    document.getElementById(
        "allEmployeesPayrollPeriod"
    );

    const printPayrollButton =
    document.getElementById("printPayrollButton");


// =============================================
// Data
// =============================================

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTNkxEZNkq8VNR70tZ8BR0iBzTFbndSc4",
  authDomain: "unpaid-leave-tracker.firebaseapp.com",
  projectId: "unpaid-leave-tracker",
  storageBucket: "unpaid-leave-tracker.firebasestorage.app",
  messagingSenderId: "305334337983",
  appId: "1:305334337983:web:0507f8a62aea477f79e10a"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
auth.setPersistence(
    firebase.auth.Auth.Persistence.SESSION
);
const db = firebase.firestore();

let employees =
    JSON.parse(
        localStorage.getItem("unpaidLeaveEmployees")
    ) || [];

let attendanceEntries =
    JSON.parse(
        localStorage.getItem("unpaidLeaveEntries")
    ) || [];

    let carWashEntries = [];

let editingEmployeeId = null;
let editingEntryId = null;

// =========================================
// Login Elements
// =========================================

const loginScreen =
    document.getElementById("loginScreen");

const trackerApp =
    document.getElementById("trackerApp");

const loginUsernameInput =
    document.getElementById("loginUsername");

const loginPasswordInput =
    document.getElementById("loginPassword");

const loginButton =
    document.getElementById("loginButton");

const loginMessage =
    document.getElementById("loginMessage");

    const logoutButton =
    document.getElementById("logoutButton");

    const manageUsersButton =
    document.getElementById("manageUsersButton");

const userManagementSection =
    document.getElementById("userManagementSection");

const closeUserManagementButton =
    document.getElementById("closeUserManagementButton");

const newUserNameInput =
    document.getElementById("newUserName");

const newUserEmailInput =
    document.getElementById("newUserEmail");

const newUserRoleInput =
    document.getElementById("newUserRole");

const newUserPasswordInput =
    document.getElementById("newUserPassword");

const createUserButton =
    document.getElementById("createUserButton");

const userManagementMessage =
    document.getElementById("userManagementMessage");

    const userManagementTableBody =
    document.getElementById("userManagementTableBody");

    // =========================================
// Allowed Login Users
// =========================================




// =========================================
// Login Function
// =========================================

async function handleLogin() {

    const email =
        loginUsernameInput.value
            .trim();

    const password =
        loginPasswordInput.value.trim();

    if (!email || !password) {

        loginMessage.textContent =
            "Please enter your email address and password.";

        return;
    }

    try {

        const userCredential =
            await auth.signInWithEmailAndPassword(
                email,
                password
            );

        const firebaseUser =
            userCredential.user;

        const userDocument =
            await db
                .collection("users")
                .doc(firebaseUser.uid)
                .get();

        if (!userDocument.exists) {

            await auth.signOut();

            loginMessage.textContent =
                "Your account has not been assigned access yet.";

            return;
        }

        const userData =
            userDocument.data();

        if (
            userData.role !== "Manager"
            &&
            userData.role !== "HR"
        ) {

            await auth.signOut();

            loginMessage.textContent =
                "You do not have permission to access this tracker.";

            return;
        }

        const loggedInUser = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            name: userData.name,
            role: userData.role
        };

        sessionStorage.setItem(
            "loggedInLeaveUser",
            JSON.stringify(loggedInUser)
        );

        loginScreen.style.display =
            "none";

        trackerApp.style.display =
            "block";

        loginMessage.textContent =
            "";

        const preparedByName =
            document.getElementById(
                "preparedByName"
            );

        if (preparedByName) {

            preparedByName.textContent =
                `${userData.name} - ${userData.role}`;
        }

    } catch (error) {

        console.error(
            "Login error:",
            error
        );

        loginMessage.textContent =
            "Incorrect email address or password.";
    }
}

// =========================================
// Restore Logged-In User
// =========================================

function restoreLoginSession() {

    auth.onAuthStateChanged(
        async firebaseUser => {

            if (!firebaseUser) {

                trackerApp.style.display =
                    "none";

                loginScreen.style.display =
                    "flex";

                sessionStorage.removeItem(
                    "loggedInLeaveUser"
                );

                return;
            }

            const userDocument =
                await db
                    .collection("users")
                    .doc(firebaseUser.uid)
                    .get();

            if (!userDocument.exists) {

                await auth.signOut();

                return;
            }

            const userData =
                userDocument.data();

            if (
                userData.role !== "Manager"
                &&
                userData.role !== "HR"
            ) {

                await auth.signOut();

                return;
            }

            const loggedInUser = {
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                name: userData.name,
                role: userData.role
            };

            sessionStorage.setItem(
                "loggedInLeaveUser",
                JSON.stringify(loggedInUser)
            );

            loginScreen.style.display =
                "none";

            trackerApp.style.display =
                "block";

                await loadEmployeesFromFirestore();

                await loadAttendanceEntriesFromFirestore();

                await loadCarWashesFromFirestore();

            const preparedByName =
                document.getElementById(
                    "preparedByName"
                );

            if (preparedByName) {

                preparedByName.textContent =
                    `${userData.name} - ${userData.role}`;
            }
        }
    );
}

// =========================================
// Logout Function
// =========================================

async function handleLogout() {

    try {

        await auth.signOut();

    } catch (error) {

        console.error(
            "Logout error:",
            error
        );
    }

    sessionStorage.removeItem(
        "loggedInLeaveUser"
    );

    trackerApp.style.display =
        "none";

    loginScreen.style.display =
        "flex";

    loginUsernameInput.value =
        "";

    loginPasswordInput.value =
        "";

    loginMessage.textContent =
        "";

    loginUsernameInput.focus();
}

// =========================================
// User Management Panel
// =========================================

async function openUserManagement() {

    userManagementSection.style.display =
        "block";

    userManagementMessage.textContent =
        "";

    userManagementTableBody.innerHTML = `
        <tr>
            <td colspan="3" class="empty-row">
                Loading users...
            </td>
        </tr>
    `;

    try {

        const snapshot =
            await db
                .collection("users")
                .orderBy("name")
                .get();

        userManagementTableBody.innerHTML =
            "";

        if (snapshot.empty) {

            userManagementTableBody.innerHTML = `
                <tr>
                    <td colspan="3" class="empty-row">
                        No users found.
                    </td>
                </tr>
            `;

            return;
        }

        snapshot.forEach(doc => {

            const user =
                doc.data();

            const row =
                document.createElement("tr");

            row.innerHTML = `
    <td>${user.name || "-"}</td>
    <td>${user.email || "-"}</td>
    <td>${user.role || "-"}</td>

    <td>
        <button
            type="button"
            class="edit-user-button"
            data-user-id="${doc.id}"
        >
            Edit
        </button>

        <button
    type="button"
    class="delete-user-button"
    data-user-id="${doc.id}"
>
    Delete
</button>
    </td>
`;

            userManagementTableBody
                .appendChild(row);
                
       

        const editButton =
    row.querySelector(
        ".edit-user-button"
    );

editButton.addEventListener(
    "click",
    function () {

        editUserAccount(
            doc.id
        );
    }
);

const deleteButton =
    row.querySelector(
        ".delete-user-button"
    );

deleteButton.addEventListener(
    "click",
    function () {

        removeUserAccess(
            doc.id,
            user.name || "this user"
        );
    }
);

});

    } catch (error) {

        console.error(
            "Load users error:",
            error
        );

        userManagementTableBody.innerHTML = `
            <tr>
                <td colspan="3" class="empty-row">
                    Unable to load users.
                </td>
            </tr>
        `;
    }
}


function closeUserManagement() {

    userManagementSection.style.display =
        "none";

    userManagementMessage.textContent =
        "";
}

async function createUserAccount() {

    const name =
        newUserNameInput.value.trim();

    const email =
        newUserEmailInput.value.trim();

    const role =
        newUserRoleInput.value;

    const password =
        newUserPasswordInput.value.trim();


    if (
        !name ||
        !email ||
        !password
    ) {

        userManagementMessage.textContent =
            "Please complete all fields.";

        return;
    }


    userManagementMessage.textContent =
        "Creating user...";


    try {

        const secondaryAppName =
            `secondary-${Date.now()}`;

        const secondaryApp =
            firebase.initializeApp(
                firebaseConfig,
                secondaryAppName
            );

        const secondaryAuth =
            secondaryApp.auth();


        const userCredential =
            await secondaryAuth
                .createUserWithEmailAndPassword(
                    email,
                    password
                );


        const newUser =
            userCredential.user;


        await db
            .collection("users")
            .doc(newUser.uid)
            .set({

                name: name,
                email: email,
                role: role

            });


        await secondaryAuth.signOut();

        await secondaryApp.delete();


        newUserNameInput.value =
            "";

        newUserEmailInput.value =
            "";

        newUserPasswordInput.value =
            "";

        newUserRoleInput.value =
            "Manager";


        userManagementMessage.textContent =
            "User created successfully.";

    } catch (error) {

        console.error(
            "Create user error:",
            error
        );

        userManagementMessage.textContent =
            error.message;
    }
}

async function editUserAccount(userId) {

    try {

        const userDocument =
            await db
                .collection("users")
                .doc(userId)
                .get();

        if (!userDocument.exists) {

            alert(
                "User profile could not be found."
            );

            return;
        }

        const user =
            userDocument.data();


        const newName =
            prompt(
                "Enter the user's name:",
                user.name || ""
            );

        if (newName === null) {
            return;
        }


        const newRole =
            prompt(
                "Enter role: Manager or HR",
                user.role || "HR"
            );

        if (newRole === null) {
            return;
        }


        if (
            newRole !== "Manager"
            &&
            newRole !== "HR"
        ) {

            alert(
                "Role must be either Manager or HR."
            );

            return;
        }


        await db
            .collection("users")
            .doc(userId)
            .update({

                name: newName.trim(),
                role: newRole

            });


        alert(
            "User updated successfully."
        );


        openUserManagement();

    } catch (error) {

        console.error(
            "Edit user error:",
            error
        );

        alert(
            "Unable to update user."
        );
    }
}

async function removeUserAccess(
    userId,
    userName
) {

    const confirmed =
        confirm(
            `Are you sure you want to remove access for ${userName}?`
        );

    if (!confirmed) {
        return;
    }


    if (
        auth.currentUser &&
        auth.currentUser.uid === userId
    ) {

        alert(
            "You cannot remove your own access while you are logged in."
        );

        return;
    }


    try {

        await db
            .collection("users")
            .doc(userId)
            .delete();


        alert(
            "User access removed successfully."
        );


        openUserManagement();

    } catch (error) {

        console.error(
            "Remove user access error:",
            error
        );

        alert(
            "Unable to remove user access."
        );
    }
}


// =============================================
// Default Date and Month
// =============================================

function setDefaultDates() {

    const today = new Date();

    const year =
        today.getFullYear();

    const month =
        String(today.getMonth() + 1)
            .padStart(2, "0");

    const day =
        String(today.getDate())
            .padStart(2, "0");

    attendanceDateInput.value =
        `${year}-${month}-${day}`;

    monthFilterInput.value =
        `${year}-${month}`;

        carWashPayrollMonthInput.value =
    `${year}-${month}`;

    carWashHistoryMonthInput.value =
    `${year}-${month}`;
}

setDefaultDates();


// =============================================
// Time Helper
// =============================================

function timeToMinutes(time) {

    if (!time) {
        return 0;
    }

    const [hours, minutes] =
        time.split(":").map(Number);

    return (hours * 60) + minutes;
}


// =============================================
// Format Minutes
// =============================================

function formatMinutes(minutes) {

    const hours =
        Math.floor(minutes / 60);

    const mins =
        minutes % 60;

    return `${hours}h ${String(mins).padStart(2, "0")}m`;
}


// =============================================
// Format Date
// =============================================

function formatDate(dateString) {

    const date =
        new Date(`${dateString}T00:00:00`);

    return date.toLocaleDateString(
        "en-ZA",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );
}


// =============================================
// Save Employees
// =============================================

async function saveEmployees(employeeToSave = null) {

    localStorage.setItem(
        "unpaidLeaveEmployees",
        JSON.stringify(employees)
    );

    if (!employeeToSave) {
        return;
    }

    try {

        await db
            .collection("employees")
            .doc(
                String(employeeToSave.id)
            )
            .set(
                employeeToSave,
                {
                    merge: true
                }
            );

    } catch (error) {

        console.error(
            "Save employee to Firestore error:",
            error
        );

        throw error;
    }
}

async function loadEmployeesFromFirestore() {

    try {

        const snapshot =
            await db
                .collection("employees")
                .orderBy("name")
                .get();

        if (
    snapshot.empty &&
    employees.length > 0
) {

    for (const employee of employees) {

        await saveEmployees(
            employee
        );
    }

    console.log(
        "Existing employees migrated to Firestore."
    );

} else {

    employees = [];

    snapshot.forEach(doc => {

        employees.push({
            id: doc.id,
            ...doc.data()
        });
    });
}

        renderEmployeeDropdown();

        renderEntries();

        updatePayrollSummary();

        renderAllEmployeesPayrollSummary();

    } catch (error) {

        console.error(
            "Load employees error:",
            error
        );
    }
}


// =============================================
// Save Attendance Entries
// =============================================

async function saveAttendanceEntries(entryToSave = null) {

    // Keep a local backup
    localStorage.setItem(
        "unpaidLeaveEntries",
        JSON.stringify(attendanceEntries)
    );

    if (!entryToSave) {
        return;
    }

    try {

        await db
            .collection("unpaidLeaveEntries")
            .doc(String(entryToSave.id))
            .set(
                entryToSave,
                {
                    merge: true
                }
            );

    } catch (error) {

        console.error(
            "Save unpaid leave entry to Firestore error:",
            error
        );

        throw error;
    }
}


// =============================================
// Load Attendance Entries From Firestore
// =============================================

async function loadAttendanceEntriesFromFirestore() {

    try {

        const snapshot =
            await db
                .collection("unpaidLeaveEntries")
                .get();


        const firestoreEntries = [];

        snapshot.forEach(doc => {

            const data = doc.data();

            // Ignore the temporary test document
            if (
                data.employeeId &&
                data.date
            ) {

                firestoreEntries.push({
                    id: doc.id,
                    ...data
                });
            }
        });


        // If Firestore has no real entries yet,
        // migrate existing local records
        if (
            firestoreEntries.length === 0 &&
            attendanceEntries.length > 0
        ) {

            for (const entry of attendanceEntries) {

                await saveAttendanceEntries(
                    entry
                );
            }

            console.log(
                "Existing unpaid leave entries migrated to Firestore."
            );

        } else {

            attendanceEntries =
                firestoreEntries;

            localStorage.setItem(
                "unpaidLeaveEntries",
                JSON.stringify(attendanceEntries)
            );
        }


        renderEntries();

        updatePayrollSummary();

        renderAllEmployeesPayrollSummary();

    } catch (error) {

        console.error(
            "Load unpaid leave entries error:",
            error
        );
    }
}

// =============================================
// Get Car Wash Payroll Period
// =============================================

function getCarWashPayrollPeriod(washDate) {

    const date =
        new Date(`${washDate}T00:00:00`);

    let year =
        date.getFullYear();

    let month =
        date.getMonth();

    const day =
        date.getDate();

    // Car washes from the 23rd onward
    // default to the following payroll month
    if (day > 22) {

        month++;

        if (month > 11) {

            month = 0;
            year++;
        }
    }

    return (
        `${year}-` +
        `${String(month + 1).padStart(2, "0")}`
    );
}

// =============================================
// Load Car Washes From Firestore
// =============================================

async function loadCarWashesFromFirestore() {

    try {

        const snapshot =
            await db
                .collection("carWashes")
                .get();

        carWashEntries = [];

snapshot.forEach(doc => {

    carWashEntries.push({
        id: doc.id,
        ...doc.data()
    });
});

        carWashEntries.sort(
    (a, b) =>
        new Date(b.washDate) -
        new Date(a.washDate)
);

        renderCarWashHistory(
    carWashEntries
);

renderCarWashPayrollSummary();

    } catch (error) {

        console.error(
            "Load car washes error:",
            error
        );

        carWashTableBody.innerHTML = `
            <tr>
                <td
                    colspan="7"
                    class="empty-row"
                >
                    Unable to load car wash records.
                </td>
            </tr>
        `;
    }
}

// =============================================
// Render Car Wash Payroll Summary
// =============================================

function renderCarWashPayrollSummary() {

    const selectedMonth =
        carWashPayrollMonthInput.value;

    carWashPayrollTableBody.innerHTML =
        "";

    if (!selectedMonth) {

        carWashPayrollTableBody.innerHTML = `
            <tr>
                <td
                    colspan="7"
                    class="empty-row"
                >
                    Please select a payroll month.
                </td>
            </tr>
        `;

                return;
    }

    const payrollEntries =
        carWashEntries.filter(carWash => {

            const payrollPeriod =
                carWash.payrollPeriod ||
                getCarWashPayrollPeriod(
                    carWash.washDate
                );

                        return (
                payrollPeriod ===
                selectedMonth
            );
        });

        if (payrollEntries.length === 0) {

        carWashPayrollTableBody.innerHTML = `
            <tr>
                <td
                    colspan="7"
                    class="empty-row"
                >
                    No car washes for this payroll period.
                </td>
            </tr>
        `;

        carWashTotalWashes.textContent =
    "0";

carWashOutstandingWashes.textContent =
    "0";

carWashTotalValue.textContent =
    "R0.00";

carWashOutstandingValue.textContent =
    "R0.00";

        return;
    }


    const groupedEmployees = {};

    payrollEntries.forEach(carWash => {

        const employeeName =
            carWash.employeeName.trim();

        const employeeKey =
            employeeName.toLowerCase();

        if (!groupedEmployees[employeeKey]) {

            groupedEmployees[employeeKey] = {
                employeeName: employeeName,
                numberOfWashes: 0,
                outstandingWashes: 0,
                totalAmount: 0,
                outstandingAmount: 0,
                loadedCount: 0
            };
        }

                groupedEmployees[employeeKey].numberOfWashes++;

        groupedEmployees[employeeKey].totalAmount +=
            Number(carWash.amount) || 0;

        if (carWash.loadedToPayroll) {

    groupedEmployees[employeeKey].loadedCount++;

} else {

    groupedEmployees[employeeKey].outstandingWashes++;

    groupedEmployees[employeeKey].outstandingAmount +=
        Number(carWash.amount) || 0;
}

            });

             const employeeSummary =
        Object.values(groupedEmployees);  


    employeeSummary.sort(
    (a, b) =>
        a.employeeName.localeCompare(
            b.employeeName
        )
);

employeeSummary.forEach(employee => {

    const row =
        document.createElement("tr");

    const payrollStatus =
        employee.loadedCount === 0
            ? "Outstanding"
            : employee.loadedCount ===
              employee.numberOfWashes
                ? "Loaded"
                : "Partially Loaded";

    row.innerHTML = `
        <td>
            ${employee.employeeName}
        </td>

        <td>
            ${employee.numberOfWashes}
        </td>

        <td>
    ${employee.outstandingWashes}
</td>

        <td>
            R${employee.totalAmount.toFixed(2)}
        </td>

        <td>
    R${employee.outstandingAmount.toFixed(2)}
</td>

        <td>
    <span
        class="payroll-status ${
            payrollStatus === "Loaded"
                ? "payroll-loaded"
                : payrollStatus === "Partially Loaded"
                    ? "payroll-partial"
                    : "payroll-outstanding"
        }"
    >
        ${payrollStatus}
    </span>
</td>

<td>
    ${
        employee.outstandingWashes > 0
            ? `
                <button
                    type="button"
                    class="history-edit-button"
                    onclick="markEmployeeCarWashesAsLoaded('${employee.employeeName}')"
                >
                    ${
                        employee.loadedCount > 0
                            ? "Mark Outstanding as Loaded"
                            : "Mark as Loaded"
                    }
                </button>
            `
            : "-"
    }
</td>
    `;

    carWashPayrollTableBody.appendChild(
        row
    );
});

const totalWashes =
    employeeSummary.reduce(
        (total, employee) =>
            total + employee.numberOfWashes,
        0
    );

    const totalOutstandingWashes =
    employeeSummary.reduce(
        (total, employee) =>
            total + employee.outstandingWashes,
        0
    );

const totalAmount =
    employeeSummary.reduce(
        (total, employee) =>
            total + employee.totalAmount,
        0
    );

    const totalOutstandingAmount =
    employeeSummary.reduce(
        (total, employee) =>
            total + employee.outstandingAmount,
        0
    );

    carWashTotalWashes.textContent =
    totalWashes;

carWashOutstandingWashes.textContent =
    totalOutstandingWashes;

carWashTotalValue.textContent =
    `R${totalAmount.toFixed(2)}`;

carWashOutstandingValue.textContent =
    `R${totalOutstandingAmount.toFixed(2)}`;

    const outstandingCards =
    document.querySelectorAll(
        ".car-wash-summary-card.outstanding-card"
    );

outstandingCards.forEach(card => {

    if (totalOutstandingWashes === 0) {
        card.classList.add("clear-card");
    } else {
        card.classList.remove("clear-card");
    }
});

    const totalRow =
    document.createElement("tr");

totalRow.classList.add(
    "grand-total-row"
);

totalRow.innerHTML = `
    <td>
        <strong>GRAND TOTAL</strong>
    </td>

    <td>
        <strong>${totalWashes}</strong>
    </td>

    <td>
    <strong>${totalOutstandingWashes}</strong>
</td>

    <td>
        <strong>R${totalAmount.toFixed(2)}</strong>
    </td>

    <td>
    <strong>R${totalOutstandingAmount.toFixed(2)}</strong>
</td>

    <td>
        -
    </td>

    <td>
    -
</td>
`;

carWashPayrollTableBody.appendChild(
    totalRow
);

}

// =============================================
// Render Car Wash History
// =============================================

function renderCarWashHistory(carWashes) {

    carWashTableBody.innerHTML =
        "";

        const selectedHistoryMonth =
    carWashHistoryMonthInput.value;

if (selectedHistoryMonth) {

    carWashes =
        carWashes.filter(carWash =>
            carWash.washDate &&
            carWash.washDate.startsWith(
                selectedHistoryMonth
            )
        );
}

const historySearch =
    carWashHistorySearchInput.value
        .trim()
        .toLowerCase();

if (historySearch) {

    carWashes =
        carWashes.filter(carWash =>
            carWash.employeeName &&
            carWash.employeeName
                .toLowerCase()
                .includes(historySearch)
        );
}

const totalHistoryWashes =
    carWashes.length;

const loadedHistoryWashes =
    carWashes.filter(
        carWash => carWash.loadedToPayroll
    ).length;

const outstandingHistoryWashes =
    totalHistoryWashes - loadedHistoryWashes;

const totalHistoryAmount =
    carWashes.reduce(
        (total, carWash) =>
            total + Number(carWash.amount || 0),
        0
    );

    const historyMonthName =
    selectedHistoryMonth
        ? new Date(
            `${selectedHistoryMonth}-01T00:00:00`
        ).toLocaleDateString(
            "en-ZA",
            {
                month: "long",
                year: "numeric"
            }
        )
        : "";

    carWashHistorySummaryText.textContent =
    `${historyMonthName} • ` +
    `${totalHistoryWashes} wash${totalHistoryWashes === 1 ? "" : "es"} • ` +
    `R${totalHistoryAmount.toFixed(2)} total • ` +
    `${loadedHistoryWashes} loaded • ` +
    `${outstandingHistoryWashes} outstanding`;

    if (carWashes.length === 0) {

        carWashHistorySummaryText.textContent =
    "No car wash history for this month.";

        carWashTableBody.innerHTML = `
            <tr>
                <td
                    colspan="7"
                    class="empty-row"
                >
                    No car washes recorded for this month.
                </td>
            </tr>
        `;

        return;
    }


    carWashes.forEach(carWash => {

        const row =
            document.createElement("tr");

        const vehicleDisplay =
            carWash.vehicleType === "small"
                ? "Small Vehicle"
                : "SUV / Large Vehicle";

        const payrollStatus =
            carWash.loadedToPayroll
                ? "Loaded"
                : "Outstanding";

                const payrollPeriod =
    carWash.payrollPeriod ||
    getCarWashPayrollPeriod(
        carWash.washDate
    );

        row.innerHTML = `

            <td>
                ${formatDate(carWash.washDate)}
            </td>

            <td>
                ${carWash.employeeName}
            </td>

            <td>
                ${vehicleDisplay}
            </td>

            <td>
                R${Number(carWash.amount).toFixed(2)}
            </td>

            <td>
    ${
        new Date(
            `${payrollPeriod}-01T00:00:00`
        ).toLocaleDateString(
            "en-ZA",
            {
                month: "long",
                year: "numeric"
            }
        )
    }
</td>

            <td>
    <span
        class="payroll-status ${
            carWash.loadedToPayroll
                ? "payroll-loaded"
                : "payroll-outstanding"
        }"
    >
        ${payrollStatus}
    </span>
</td>

            <td>
    ${
        carWash.loadedToPayroll
            ? ""
            : `
                <button
                    type="button"
                    class="history-edit-button"
                    onclick="changeCarWashPayrollPeriod('${carWash.id}')"
                >
                    Change Payroll Period
                </button>
            `
    }

    <button
        type="button"
        class="history-delete-button"
        onclick="deleteCarWash('${carWash.id}')"
    >
        Delete
    </button>
</td>

        `;

        carWashTableBody.appendChild(
            row
        );
    });
}

// =============================================
// Change Car Wash Payroll Period
// =============================================

async function changeCarWashPayrollPeriod(id) {

    try {

        const carWashDocument =
            await db
                .collection("carWashes")
                .doc(String(id))
                .get();

        if (!carWashDocument.exists) {

            alert(
                "Unable to find this car wash record."
            );

            return;
        }

        const carWash =
            carWashDocument.data();

        const currentPeriod =
            carWash.payrollPeriod ||
            getCarWashPayrollPeriod(
                carWash.washDate
            );

        const newPeriod =
            prompt(
                "Enter the payroll period in YYYY-MM format:",
                currentPeriod
            );

        if (newPeriod === null) {
            return;
        }

        if (
            !/^\d{4}-(0[1-9]|1[0-2])$/.test(
                newPeriod
            )
        ) {

            alert(
                "Please enter the payroll period in YYYY-MM format, for example 2026-09."
            );

            return;
        }

        await db
            .collection("carWashes")
            .doc(String(id))
            .update({
                payrollPeriod:
                    newPeriod
            });

        await loadCarWashesFromFirestore();

        alert(
            "Payroll period updated successfully."
        );

    } catch (error) {

        console.error(
            "Change car wash payroll period error:",
            error
        );

        alert(
            "Unable to change the payroll period."
        );
    }
}

// =============================================
// Delete Car Wash
// =============================================

async function deleteCarWash(id) {

    const carWash =
        carWashEntries.find(
            entry =>
                String(entry.id) ===
                String(id)
        );

    if (!carWash) {

        alert(
            "Unable to find this car wash record."
        );

        return;
    }


    const confirmed =
        confirm(
            `Are you sure you want to delete this car wash?\n\n` +
            `Employee: ${carWash.employeeName}\n` +
            `Wash Date: ${formatDate(carWash.washDate)}\n` +
            `Amount: R${Number(carWash.amount).toFixed(2)}\n\n` +
            `This will permanently remove it from the Car Wash History and Payroll Summary.`
        );


    if (!confirmed) {
        return;
    }


    try {

        await db
            .collection("carWashes")
            .doc(String(id))
            .delete();


        await loadCarWashesFromFirestore();


        alert(
            "Car wash deleted successfully."
        );


    } catch (error) {

        console.error(
            "Delete car wash error:",
            error
        );


        alert(
            "Unable to delete the car wash. Please try again."
        );
    }
}

// =============================================
// Mark Car Wash As Loaded
// =============================================

async function markCarWashAsLoaded(id) {

    const confirmed =
        confirm(
            "Are you sure this car wash has been loaded to payroll?\n\n" +
            "Once marked as loaded, it will be recorded as completed."
        );

    if (!confirmed) {
        return;
    }

    try {

        const loggedInUser =
            JSON.parse(
                sessionStorage.getItem(
                    "loggedInLeaveUser"
                )
            );

        await db
            .collection("carWashes")
            .doc(String(id))
            .update({

                loadedToPayroll:
                    true,

                loadedToPayrollDate:
                    new Date().toISOString(),

                loadedBy:
                    loggedInUser
                        ? loggedInUser.name
                        : "Unknown"

            });

        await loadCarWashesFromFirestore();

        alert(
            "Car wash marked as loaded to payroll."
        );

    } catch (error) {

        console.error(
            "Mark car wash as loaded error:",
            error
        );

        alert(
            "Unable to mark this car wash as loaded."
        );
    }
}

// =============================================
// Mark Employee Car Washes As Loaded
// =============================================

async function markEmployeeCarWashesAsLoaded(
    employeeName
) {

    const selectedMonth =
        carWashPayrollMonthInput.value;

    if (!selectedMonth) {

        alert(
            "Please select a payroll month."
        );

        return;
    }

    const outstandingWashes =
        carWashEntries.filter(carWash => {

            const payrollPeriod =
                carWash.payrollPeriod ||
                getCarWashPayrollPeriod(
                    carWash.washDate
                );

            return (
                carWash.employeeName
                    .trim()
                    .toLowerCase() ===
                    employeeName
                        .trim()
                        .toLowerCase()
                &&
                payrollPeriod ===
                    selectedMonth
                &&
                !carWash.loadedToPayroll
            );
        });

    if (outstandingWashes.length === 0) {

        alert(
            "There are no outstanding car washes for this employee."
        );

        return;
    }

        const outstandingAmount =
        outstandingWashes.reduce(
            (total, carWash) =>
                total +
                (Number(carWash.amount) || 0),
            0
        );

        

        const confirmed =
    confirm(
        `Mark the following car washes as loaded to payroll?\n\n` +
        `Employee: ${employeeName}\n` +
        `Outstanding Washes: ${outstandingWashes.length}\n` +
        `Outstanding Amount: R${outstandingAmount.toFixed(2)}\n\n` +
        `Payroll Period: ${selectedMonth}`
    );

if (!confirmed) {
    return;
}

try {

    const loggedInUser =
        JSON.parse(
            sessionStorage.getItem(
                "loggedInLeaveUser"
            )
        );

    const batch =
        db.batch();

    outstandingWashes.forEach(carWash => {

        const carWashRef =
            db
                .collection("carWashes")
                .doc(String(carWash.id));

        batch.update(
            carWashRef,
            {
                loadedToPayroll: true,
                loadedToPayrollDate:
                    new Date().toISOString(),
                loadedBy:
                    loggedInUser
                        ? loggedInUser.name
                        : "Unknown"
            }
        );
    });

    await batch.commit();

    await loadCarWashesFromFirestore();

alert(
    `${employeeName}'s outstanding car washes have been marked as loaded to payroll.`
);

} catch (error) {

    console.error(
        "Mark employee car washes as loaded error:",
        error
    );

    alert(
        "Unable to mark these car washes as loaded."
    );

    return;
}

}

// =============================================
// Mark All Car Washes As Loaded
// =============================================

async function markAllCarWashesAsLoaded() {

    const selectedMonth =
        carWashPayrollMonthInput.value;

    if (!selectedMonth) {

        alert(
            "Please select a payroll month."
        );

        return;
    }


    const outstandingWashes =
        carWashEntries.filter(carWash => {

            const payrollPeriod =
                carWash.payrollPeriod ||
                getCarWashPayrollPeriod(
                    carWash.washDate
                );

            return (
                payrollPeriod ===
                    selectedMonth
                &&
                !carWash.loadedToPayroll
            );
        });


    if (outstandingWashes.length === 0) {

        alert(
            "There are no outstanding car washes for this payroll period."
        );

        return;
    }


    const outstandingAmount =
        outstandingWashes.reduce(
            (total, carWash) =>
                total +
                (Number(carWash.amount) || 0),
            0
        );


    const confirmed =
        confirm(
            `Mark ALL outstanding car washes as loaded to payroll?\n\n` +
            `Payroll Period: ${selectedMonth}\n` +
            `Outstanding Washes: ${outstandingWashes.length}\n` +
            `Outstanding Amount: R${outstandingAmount.toFixed(2)}\n\n` +
            `This will mark every outstanding car wash in this payroll period as loaded.`
        );


    if (!confirmed) {
        return;
    }


    try {

        const loggedInUser =
            JSON.parse(
                sessionStorage.getItem(
                    "loggedInLeaveUser"
                )
            );


        const batch =
            db.batch();


        outstandingWashes.forEach(carWash => {

            const carWashRef =
                db
                    .collection("carWashes")
                    .doc(String(carWash.id));


            batch.update(
                carWashRef,
                {
                    loadedToPayroll:
                        true,

                    loadedToPayrollDate:
                        new Date().toISOString(),

                    loadedBy:
                        loggedInUser
                            ? loggedInUser.name
                            : "Unknown"
                }
            );
        });


        await batch.commit();


        await loadCarWashesFromFirestore();


        alert(
            `All outstanding car washes for ${selectedMonth} have been marked as loaded to payroll.`
        );


    } catch (error) {

        console.error(
            "Mark all car washes as loaded error:",
            error
        );


        alert(
            "Unable to mark all car washes as loaded."
        );
    }
}

// =============================================
// Print Car Wash Payroll Report
// =============================================

function printCarWashPayrollReport() {

    const selectedMonth =
        carWashPayrollMonthInput.value;

    if (!selectedMonth) {

        alert(
            "Please select a payroll month."
        );

        return;
    }

    const payrollEntries =
    carWashEntries.filter(carWash => {

        const payrollPeriod =
            carWash.payrollPeriod ||
            getCarWashPayrollPeriod(
                carWash.washDate
            );

        return payrollPeriod === selectedMonth;
    });

    if (payrollEntries.length === 0) {

    alert(
        "There are no car washes for the selected payroll period."
    );

    return;
}

const groupedEmployees = {};

payrollEntries.forEach(carWash => {

    const employeeName =
        carWash.employeeName.trim();

    const employeeKey =
        employeeName.toLowerCase();

    if (!groupedEmployees[employeeKey]) {

        groupedEmployees[employeeKey] = {
            employeeName: employeeName,
            washes: []
        };
    }

    groupedEmployees[employeeKey].washes.push(
        carWash
    );
});

const reportEmployees =
    Object.values(groupedEmployees).map(employee => {

        const totalWashes =
            employee.washes.length;

        const outstandingWashes =
            employee.washes.filter(
                carWash =>
                    !carWash.loadedToPayroll
            );

        const totalAmount =
            employee.washes.reduce(
                (total, carWash) =>
                    total +
                    (Number(carWash.amount) || 0),
                0
            );

        const outstandingAmount =
            outstandingWashes.reduce(
                (total, carWash) =>
                    total +
                    (Number(carWash.amount) || 0),
                0
            );

            let payrollStatus = "Outstanding";

if (outstandingWashes.length === 0) {

    payrollStatus = "Loaded";

} else if (
    outstandingWashes.length < totalWashes
) {

    payrollStatus = "Partially Loaded";
}

        return {
            employeeName:
                employee.employeeName,

            totalWashes:
                totalWashes,

            outstandingWashes:
                outstandingWashes.length,

            totalAmount:
                totalAmount,

            outstandingAmount:
    outstandingAmount,

payrollStatus:
    payrollStatus

        };
    });

    const grandTotalWashes =
    reportEmployees.reduce(
        (total, employee) =>
            total + employee.totalWashes,
        0
    );

const grandOutstandingWashes =
    reportEmployees.reduce(
        (total, employee) =>
            total + employee.outstandingWashes,
        0
    );

const grandTotalAmount =
    reportEmployees.reduce(
        (total, employee) =>
            total + employee.totalAmount,
        0
    );

const grandOutstandingAmount =
    reportEmployees.reduce(
        (total, employee) =>
            total + employee.outstandingAmount,
        0
    );

    const payrollMonthName =
    new Date(
        `${selectedMonth}-01T00:00:00`
    ).toLocaleDateString(
        "en-ZA",
        {
            month: "long",
            year: "numeric"
        }
    );

    const reportGeneratedDate =
    new Date().toLocaleString(
        "en-ZA",
        {
            dateStyle: "long",
            timeStyle: "short"
        }
    );

    const reportRows =
    reportEmployees.map(employee => `
        <tr>
            <td>${employee.employeeName}</td>
            <td>${employee.totalWashes}</td>
            <td>${employee.outstandingWashes}</td>
            <td>R${employee.totalAmount.toFixed(2)}</td>
            <td>R${employee.outstandingAmount.toFixed(2)}</td>
            <td>${employee.payrollStatus}</td>
        </tr>
    `).join("");

    const printWindow =
    window.open(
        "",
        "_blank"
    );

if (!printWindow) {

    alert(
        "Unable to open the payroll report. Please allow pop-ups for this website."
    );

    return;
}

printWindow.document.write(`
<!DOCTYPE html>
<html>
<head>

    <title>
        Car Wash Payroll Report - ${payrollMonthName}
    </title>

    <style>

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 35px;
        font-family: Arial, sans-serif;
        color: #1f2937;
        background: #ffffff;
    }

    h1 {
        margin: 0;
        color: #163a63;
        font-size: 28px;
    }

    h2 {
        margin: 6px 0 28px;
        color: #64748b;
        font-size: 17px;
        font-weight: 500;
    }

    .report-generated {
    margin: -18px 0 24px;
    color: #64748b;
    font-size: 11px;
}

.report-actions {
    margin-bottom: 20px;
}

.report-actions button {
    padding: 10px 16px;
    background: #163a63;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
}

.report-actions button:hover {
    background: #0f2d4d;
}

.report-summary {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 24px;
}

.report-summary-card {
    padding: 14px 16px;
    background: #f8fafc;
    border: 1px solid #dbe3ec;
    border-radius: 8px;
}

.report-summary-card span {
    display: block;
    margin-bottom: 6px;
    color: #64748b;
    font-size: 11px;
    font-weight: 700;
}

.report-summary-card strong {
    display: block;
    color: #163a63;
    font-size: 18px;
}

@media print {

@page {
    size: A4 landscape;
    margin: 12mm;
}

    .report-actions {
        display: none;
    }

    body {
        padding: 0;
    }
}

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }

    th {
        padding: 11px 10px;
        background: #163a63;
        color: #ffffff;
        text-align: left;
        border: 1px solid #163a63;
    }

    td {
        padding: 11px 10px;
        border: 1px solid #dbe3ec;
    }

    tbody tr:last-child {
        background: #eef4fb;
        color: #163a63;
    }

</style>

</head>

<body>

    <h1>
        Car Wash Payroll Report
    </h1>

    <h2>
        ${payrollMonthName}
    </h2>

    <p class="report-generated">
    Generated: ${reportGeneratedDate}
</p>

<div class="report-actions">
    <button
        type="button"
        onclick="window.print()"
    >
        Print / Save as PDF
    </button>
</div>

<div class="report-summary">

    <div class="report-summary-card">
        <span>Total Washes</span>
        <strong>${grandTotalWashes}</strong>
    </div>

    <div class="report-summary-card">
        <span>Outstanding Washes</span>
        <strong>${grandOutstandingWashes}</strong>
    </div>

    <div class="report-summary-card">
        <span>Total Value</span>
        <strong>R${grandTotalAmount.toFixed(2)}</strong>
    </div>

    <div class="report-summary-card">
        <span>Outstanding Value</span>
        <strong>R${grandOutstandingAmount.toFixed(2)}</strong>
    </div>

</div>

    <table>

    <thead>
        <tr>
            <th>Employee</th>
            <th>Number of Washes</th>
            <th>Outstanding Washes</th>
            <th>Total Amount</th>
            <th>Outstanding Amount</th>
            <th>Payroll Status</th>
        </tr>
    </thead>

    <tbody>

        ${reportRows}

        <tr>
            <td>
                <strong>Grand Total</strong>
            </td>

            <td>
                <strong>${grandTotalWashes}</strong>
            </td>

            <td>
                <strong>${grandOutstandingWashes}</strong>
            </td>

            <td>
                <strong>R${grandTotalAmount.toFixed(2)}</strong>
            </td>

            <td>
                <strong>R${grandOutstandingAmount.toFixed(2)}</strong>
            </td>

            <td>
                -
            </td>
        </tr>

    </tbody>

</table>

</body>
</html>
`);

}


// =============================================
// Render Employee Dropdown
// =============================================

function renderEmployeeDropdown() {

    const currentValue =
        employeeSelect.value;

    employeeSelect.innerHTML = `
        <option value="">
            Select an employee
        </option>
    `;

    const sortedEmployees =
        [...employees].sort((a, b) =>
            a.name.localeCompare(b.name)
        );

    sortedEmployees.forEach(employee => {

        const option =
            document.createElement("option");

        option.value =
            employee.id;

        option.textContent =
            `${employee.name} (${employee.employeeNumber})`;

        employeeSelect.appendChild(option);
    });

    if (
        employees.some(
            employee =>
                String(employee.id) ===
                String(currentValue)
        )
    ) {
        employeeSelect.value =
            currentValue;
    }
}


// =============================================
// Get Selected Employee
// =============================================

function getSelectedEmployee() {

    const employeeId =
        employeeSelect.value;

    if (!employeeId) {
        return null;
    }

    return employees.find(
        employee =>
            String(employee.id) ===
            String(employeeId)
    ) || null;
}


// =============================================
// Calculate Employee Paid Day
// =============================================

function calculateEmployeePaidDayMinutes(employee) {

    if (!employee) {
        return 0;
    }

    const start =
        timeToMinutes(employee.startTime);

    const end =
        timeToMinutes(employee.endTime);

    const lunchStart =
        timeToMinutes(employee.lunchStart);

    const lunchEnd =
        timeToMinutes(employee.lunchEnd);

    const totalDayMinutes =
        end - start;

    const lunchMinutes =
        lunchEnd - lunchStart;

    return Math.max(
        0,
        totalDayMinutes - lunchMinutes
    );
}


// =============================================
// Open Add Employee Form
// =============================================

function openAddEmployeeForm() {

    editingEmployeeId = null;

    employeeFormTitle.textContent =
        "Add Employee";

    employeeNameInput.value = "";

    employeeNumberInput.value = "";

    employeeStartTimeInput.value =
        "08:00";

    employeeEndTimeInput.value =
        "16:30";

    employeeLunchStartInput.value =
        "12:30";

    employeeLunchEndInput.value =
        "13:00";

    employeeFormCard.style.display =
        "block";
}


// =============================================
// Close Employee Form
// =============================================

function closeEmployeeForm() {

    employeeFormCard.style.display =
        "none";

    editingEmployeeId = null;
}


// =============================================
// Save Employee
// =============================================

async function saveEmployee() {

    const name =
        employeeNameInput.value.trim();

    const employeeNumber =
        employeeNumberInput.value.trim();

    const startTime =
        employeeStartTimeInput.value;

    const endTime =
        employeeEndTimeInput.value;

    const lunchStart =
        employeeLunchStartInput.value;

    const lunchEnd =
        employeeLunchEndInput.value;


    if (!name) {

        alert(
            "Please enter the employee's name."
        );

        return;
    }


    if (!employeeNumber) {

        alert(
            "Please enter an employee number."
        );

        return;
    }


    const duplicateEmployee =
        employees.find(employee =>
            employee.employeeNumber
                .toLowerCase() ===
            employeeNumber.toLowerCase()
            &&
            employee.id !==
                editingEmployeeId
        );


    if (duplicateEmployee) {

        alert(
            "An employee with this employee number already exists."
        );

        return;
    }


    const employee = {

        id:
            editingEmployeeId ||
            Date.now(),

        name:
            name,

        employeeNumber:
            employeeNumber,

        startTime:
            startTime,

        endTime:
            endTime,

        lunchStart:
            lunchStart,

        lunchEnd:
            lunchEnd

    };


    const paidDayMinutes =
        calculateEmployeePaidDayMinutes(
            employee
        );


    if (paidDayMinutes <= 0) {

        alert(
            "Please check the employee's working hours."
        );

        return;
    }


    if (editingEmployeeId) {

        const index =
            employees.findIndex(
                emp =>
                    emp.id ===
                    editingEmployeeId
            );

        employees[index] =
            employee;

    } else {

        employees.push(employee);
    }


    try {

    await saveEmployees(employee);

    renderEmployeeDropdown();

    employeeSelect.value =
        employee.id;

    closeEmployeeForm();

    renderEntries();

    updatePayrollSummary();

    renderAllEmployeesPayrollSummary();

    alert(
        "Employee saved successfully."
    );

} catch (error) {

    console.error(
        "Save employee error:",
        error
    );

    alert(
        "Unable to save the employee. Please try again."
    );
}
}


// =============================================
// Edit Selected Employee
// =============================================

function editSelectedEmployee() {

    const employee =
        getSelectedEmployee();

    if (!employee) {

        alert(
            "Please select an employee first."
        );

        return;
    }


    editingEmployeeId =
        employee.id;

    employeeFormTitle.textContent =
        "Edit Employee";

    employeeNameInput.value =
        employee.name;

    employeeNumberInput.value =
        employee.employeeNumber;

    employeeStartTimeInput.value =
        employee.startTime;

    employeeEndTimeInput.value =
        employee.endTime;

    employeeLunchStartInput.value =
        employee.lunchStart;

    employeeLunchEndInput.value =
        employee.lunchEnd;

    employeeFormCard.style.display =
        "block";
}

// =============================================
// Delete Selected Employee
// =============================================

async function deleteSelectedEmployee() {

    const employee =
        getSelectedEmployee();

    if (!employee) {

        alert(
            "Please select an employee first."
        );

        return;
    }


    const confirmed =
        confirm(
            `Are you sure you want to delete ${employee.name}?\n\n` +
            `This will also permanently delete all unpaid leave records for this employee.`
        );

    if (!confirmed) {
        return;
    }


    try {

        // =====================================
        // Delete unpaid leave entries
        // =====================================

        const entrySnapshot =
            await db
                .collection("unpaidLeaveEntries")
                .where(
                    "employeeId",
                    "==",
                    employee.id
                )
                .get();


        const batch =
            db.batch();


        entrySnapshot.forEach(doc => {

            batch.delete(
                doc.ref
            );
        });


        // =====================================
        // Delete employee
        // =====================================

        const employeeRef =
            db
                .collection("employees")
                .doc(
                    String(employee.id)
                );


        batch.delete(
            employeeRef
        );


        await batch.commit();


        // =====================================
        // Update local data
        // =====================================

        employees =
            employees.filter(
                emp =>
                    String(emp.id) !==
                    String(employee.id)
            );


        attendanceEntries =
            attendanceEntries.filter(
                entry =>
                    String(entry.employeeId) !==
                    String(employee.id)
            );


        saveEmployees();

        saveAttendanceEntries();


        employeeSelect.value =
            "";


        renderEmployeeDropdown();

        renderEntries();

        updatePayrollSummary();

        renderAllEmployeesPayrollSummary();


        alert(
            `${employee.name} and all related unpaid leave records have been deleted.`
        );

    } catch (error) {

        console.error(
            "Delete employee error:",
            error
        );

        alert(
            "Unable to delete the employee and their unpaid leave records."
        );
    }
}


// =============================================
// Entry Type Change
// =============================================

function handleEntryTypeChange() {

    const arrivalGroup =
        actualArrivalInput.closest(
            ".form-group"
        );

    if (
        entryTypeInput.value ===
        "fullDay"
    ) {

        actualArrivalInput.value = "";

        actualArrivalInput.disabled =
            true;

        arrivalGroup.style.opacity =
            "0.45";

    } else {

        actualArrivalInput.disabled =
            false;

        arrivalGroup.style.opacity =
            "1";
    }
}

// =========================================
// Save Car Wash
// =========================================

async function saveCarWash() {

    const employeeName =
        carWashEmployeeNameInput.value.trim();

    const washDate =
        carWashDateInput.value;

    const vehicleType =
        carWashVehicleTypeInput.value;

    const amount =
        Number(carWashAmountInput.value);

    if (!employeeName) {

        alert(
            "Please enter the employee name."
        );

        return;
    }

    if (!washDate) {

        alert(
            "Please select the car wash date."
        );

        return;
    }

    if (!vehicleType) {

        alert(
            "Please select the vehicle type."
        );

        return;
    }

    if (
        !amount ||
        amount <= 0
    ) {

        alert(
            "Please enter a valid car wash amount."
        );

        return;
    }

    const carWashEntry = {

        id:
            Date.now().toString(),

        employeeName:
            employeeName,

        washDate:
            washDate,

        vehicleType:
            vehicleType,

        amount:
            amount,

            payrollPeriod:
    getCarWashPayrollPeriod(
        washDate
    ),

        loadedToPayroll:
            false,

        loadedToPayrollDate:
            null,

        createdAt:
            new Date().toISOString()
    };

    try {

    await db
        .collection("carWashes")
        .doc(String(carWashEntry.id))
        .set(carWashEntry);

        await loadCarWashesFromFirestore();

    carWashEmployeeNameInput.value =
        "";

    carWashDateInput.value =
        "";

    carWashVehicleTypeInput.value =
        "";

    carWashAmountInput.value =
        "";

    alert(
        "Car wash saved successfully."
    );

} catch (error) {

    console.error(
        "Save car wash error:",
        error
    );

    alert(
        "Unable to save the car wash. Please try again."
    );
}
}


// =============================================
// Save Attendance Entry
// =============================================

async function saveEntry() {

    const employee =
        getSelectedEmployee();


    if (!employee) {

        alert(
            "Please select an employee first."
        );

        return;
    }


    const date =
        attendanceDateInput.value;

    const entryType =
        entryTypeInput.value;

    const paidDayMinutes =
        calculateEmployeePaidDayMinutes(
            employee
        );


    if (!date) {

        alert("Please select a date.");

        return;
    }


    // Prevent duplicate entry on same day

    const duplicateEntry =
    attendanceEntries.find(entry =>
        String(entry.employeeId) ===
            String(employee.id)
        &&
        entry.date === date
        &&
        String(entry.id) !==
            String(editingEntryId)
    );


    if (duplicateEntry) {

        alert(
            "This employee already has an unpaid leave entry recorded for this date."
        );

        return;
    }


    let unpaidMinutes = 0;

    let lateMinutes = 0;

    let actualArrival = "";


    // =========================================
    // Late Arrival
    // =========================================

    if (entryType === "late") {

        actualArrival =
            actualArrivalInput.value;


        if (!actualArrival) {

            alert(
                "Please enter the actual arrival time."
            );

            return;
        }


        const expectedStart =
            timeToMinutes(
                employee.startTime
            );

        const actualStart =
            timeToMinutes(
                actualArrival
            );


        lateMinutes =
            actualStart -
            expectedStart;


        if (lateMinutes <= 0) {

            alert(
                "The employee was not late."
            );

            return;
        }


        unpaidMinutes =
            Math.min(
                lateMinutes,
                paidDayMinutes
            );
    }


    // =========================================
    // Full Day Unpaid
    // =========================================

    if (
        entryType ===
        "fullDay"
    ) {

        unpaidMinutes =
            paidDayMinutes;

        lateMinutes = 0;
    }


    const unpaidDays =
        unpaidMinutes /
        paidDayMinutes;


    const entry = {

        id:
            Date.now(),

        employeeId:
            employee.id,

        employeeName:
            employee.name,

        employeeNumber:
            employee.employeeNumber,

        date:
            date,

        entryType:
            entryType,

        expectedStart:
            employee.startTime,

        actualArrival:
            actualArrival,

        lateMinutes:
            lateMinutes,

        unpaidMinutes:
            unpaidMinutes,

        paidDayMinutes:
            paidDayMinutes,

        unpaidDays:
            unpaidDays,

        notes:
            notesInput.value.trim()

    };


    try {

    await saveAttendanceEntries(
        entry
    );

    attendanceEntries.push(
        entry
    );

    localStorage.setItem(
        "unpaidLeaveEntries",
        JSON.stringify(attendanceEntries)
    );

    actualArrivalInput.value =
        "";

    notesInput.value =
        "";

    renderEntries();

    updatePayrollSummary();

    renderAllEmployeesPayrollSummary();

    alert(
        "Entry saved successfully."
    );

} catch (error) {

    console.error(
        "Save unpaid leave entry error:",
        error
    );

    alert(
        "Unable to save the entry. Please try again."
    );
}
}


// =============================================
// Render Attendance History
// =============================================

function renderEntries() {

    const employee =
        getSelectedEmployee();

    const selectedMonth =
        monthFilterInput.value;

        const [year, month] =
    selectedMonth.split("-");

const monthName =
    new Date(
        Number(year),
        Number(month) - 1
    ).toLocaleDateString(
        "en-ZA",
        {
            month: "long",
            year: "numeric"
        }
    );

allEmployeesPayrollPeriod.textContent =
    monthName;


    attendanceTableBody.innerHTML =
        "";


    if (!employee) {

        attendanceTableBody.innerHTML = `
            <tr>
                <td
                    colspan="8"
                    class="empty-row"
                >
                    Select an employee to view their records.
                </td>
            </tr>
        `;

        return;
    }


    const filteredEntries =
        attendanceEntries
            .filter(entry =>
                String(
                    entry.employeeId
                ) ===
                String(employee.id)
                &&
                entry.date.startsWith(
                    selectedMonth
                )
            )
            .sort((a, b) =>
                new Date(b.date) -
                new Date(a.date)
            );


    if (
        filteredEntries.length ===
        0
    ) {

        attendanceTableBody.innerHTML = `
            <tr>
                <td
                    colspan="8"
                    class="empty-row"
                >
                    No entries recorded for this employee this month.
                </td>
            </tr>
        `;

        return;
    }


    filteredEntries.forEach(
        entry => {

            const row =
                document.createElement(
                    "tr"
                );


            const lateDisplay =
                entry.entryType ===
                "fullDay"
                    ? "Full Day"
                    : formatMinutes(
                        entry.lateMinutes
                    );


            const actualDisplay =
                entry.actualArrival ||
                "-";


            const unpaidHours =
                (
                    entry.unpaidMinutes /
                    60
                ).toFixed(2);


            const unpaidDays =
                entry.unpaidDays
                    .toFixed(2);


            row.innerHTML = `

                <td>
                    ${formatDate(
                        entry.date
                    )}
                </td>

                <td>
                    ${entry.expectedStart}
                </td>

                <td>
                    ${actualDisplay}
                </td>

                <td>
                    ${lateDisplay}
                </td>

                <td>
                    ${unpaidHours}
                </td>

                <td>
                    ${unpaidDays}
                </td>

                <td>
                    ${entry.notes || "-"}
                </td>

                <td>
    <button
    type="button"
    class="history-edit-button"
    onclick="editEntry('${entry.id}')"
>
    Edit
</button>

<button
    type="button"
    class="history-delete-button"
    onclick="deleteEntry('${entry.id}')"
>
    Delete
</button>
</td>

            `;


            attendanceTableBody
                .appendChild(row);
        }
    );
}

function editEntry(id) {

    const entry =
        attendanceEntries.find(
            item =>
                String(item.id) ===
                String(id)
        );

    if (!entry) {

        alert(
            "Unable to find this entry."
        );

        return;
    }

    editingEntryId =
        entry.id;

    editEntryDateInput.value =
        entry.date || "";

    editEntryTypeInput.value =
        entry.entryType || "late";

    editEntryArrivalInput.value =
        entry.actualArrival || "";

        editEntryArrivalInput.dataset.originalArrival =
    entry.actualArrival || "";

    editEntryNotesInput.value =
        entry.notes || "";

    if (
    editEntryTypeInput.value ===
    "fullDay"
) {

    editEntryArrivalInput.value = "";

    editEntryArrivalInput.disabled =
        true;

} else {

    editEntryArrivalInput.disabled =
        false;

    editEntryArrivalInput.readOnly =
        false;

    if (
        !editEntryArrivalInput.value
    ) {

        editEntryArrivalInput.value =
            editEntryArrivalInput.dataset.originalArrival || "";
    }
}

    editEntryModal.style.display =
        "flex";
}

function closeEditEntryModal() {

    editEntryModal.style.display =
        "none";

    editingEntryId =
        null;
}

async function updateEditedEntry() {

    const entry =
        attendanceEntries.find(
            item =>
                String(item.id) ===
                String(editingEntryId)
        );

    if (!entry) {

        alert(
            "Unable to find the entry being edited."
        );

        return;
    }

    const employee =
        employees.find(
            employee =>
                String(employee.id) ===
                String(entry.employeeId)
        );

    if (!employee) {

        alert(
            "Unable to find the employee for this entry."
        );

        return;
    }

    const newDate =
        editEntryDateInput.value;

    const newEntryType =
        editEntryTypeInput.value;

    const newActualArrival =
        editEntryArrivalInput.value;

    const newNotes =
        editEntryNotesInput.value.trim();

    if (!newDate) {

        alert(
            "Please select a date."
        );

        return;
    }

    const duplicateEntry =
        attendanceEntries.find(
            item =>
                String(item.employeeId) ===
                    String(entry.employeeId)
                &&
                item.date === newDate
                &&
                String(item.id) !==
                    String(entry.id)
        );

    if (duplicateEntry) {

        alert(
            "This employee already has an unpaid leave entry recorded for this date."
        );

        return;
    }

    const paidDayMinutes =
        calculateEmployeePaidDayMinutes(
            employee
        );

    let lateMinutes = 0;

    let unpaidMinutes = 0;

    let actualArrival = "";

    if (newEntryType === "late") {

        if (!newActualArrival) {

            alert(
                "Please enter the actual arrival time."
            );

            return;
        }

        const expectedStart =
            timeToMinutes(
                employee.startTime
            );

        const actualStart =
            timeToMinutes(
                newActualArrival
            );

        lateMinutes =
            actualStart -
            expectedStart;

        if (lateMinutes <= 0) {

            alert(
                "The employee was not late."
            );

            return;
        }

        unpaidMinutes =
            Math.min(
                lateMinutes,
                paidDayMinutes
            );

        actualArrival =
            newActualArrival;
    }

    if (newEntryType === "fullDay") {

        unpaidMinutes =
            paidDayMinutes;

        lateMinutes = 0;

        actualArrival = "";
    }

    entry.date =
        newDate;

    entry.entryType =
        newEntryType;

    entry.expectedStart =
        employee.startTime;

    entry.actualArrival =
        actualArrival;

    entry.lateMinutes =
        lateMinutes;

    entry.unpaidMinutes =
        unpaidMinutes;

    entry.paidDayMinutes =
        paidDayMinutes;

    entry.unpaidDays =
        unpaidMinutes /
        paidDayMinutes;

    entry.notes =
        newNotes;

    try {

        await saveAttendanceEntries(
            entry
        );

        renderEntries();

        updatePayrollSummary();

        renderAllEmployeesPayrollSummary();

        closeEditEntryModal();

        alert(
            "Entry updated successfully."
        );

    } catch (error) {

        console.error(
            "Update entry error:",
            error
        );

        alert(
            "Unable to update the entry."
        );
    }
}



// =============================================
// Delete Entry
// =============================================

async function deleteEntry(id) {

    const entry =
        attendanceEntries.find(
            item =>
                String(item.id) ===
                String(id)
        );

    if (!entry) {

        alert(
            "Unable to find this entry."
        );

        return;
    }

    const confirmed =
        confirm(
            `Delete unpaid leave entry for ${entry.employeeName} on ${formatDate(entry.date)}?\n\n` +
            `This action cannot be undone.`
        );

    if (!confirmed) {
        return;
    }

    try {

        await db
            .collection("unpaidLeaveEntries")
            .doc(String(id))
            .delete();

        attendanceEntries =
            attendanceEntries.filter(
                entry =>
                    String(entry.id) !==
                    String(id)
            );

        saveAttendanceEntries();

        renderEntries();

        updatePayrollSummary();

        renderAllEmployeesPayrollSummary();

        alert(
            "Entry deleted successfully."
        );

    } catch (error) {

        console.error(
            "Delete unpaid leave entry error:",
            error
        );

        alert(
            "Unable to delete the entry from Firebase."
        );
    }
}


// =============================================
// Payroll Summary
// =============================================

function updatePayrollSummary() {

    const employee =
        getSelectedEmployee();

    const selectedMonth =
        monthFilterInput.value;


    if (!employee) {

        daysLateElement.textContent =
            "0";

        totalLateTimeElement.textContent =
            "0h 00m";

        fullDaysUnpaidElement.textContent =
            "0";

        fullDayUnpaidHoursElement.textContent =
            "0h 00m";

        unpaidHoursElement.textContent =
            "0.00";

        unpaidDaysElement.textContent =
            "0.00 days";

        return;
    }


    const filteredEntries =
        attendanceEntries.filter(
            entry =>
                String(
                    entry.employeeId
                ) ===
                String(employee.id)
                &&
                entry.date.startsWith(
                    selectedMonth
                )
        );


    let daysLate = 0;

    let totalLateMinutes = 0;

    let fullDaysUnpaid = 0;

    let fullDayUnpaidMinutes = 0;

    let totalUnpaidMinutes = 0;


    filteredEntries.forEach(
        entry => {

            if (
                entry.entryType ===
                "late"
            ) {

                daysLate++;

                totalLateMinutes +=
                    entry.lateMinutes;
            }


            if (
                entry.entryType ===
                "fullDay"
            ) {

                fullDaysUnpaid++;

                fullDayUnpaidMinutes +=
                    entry.unpaidMinutes;
            }


            totalUnpaidMinutes +=
                entry.unpaidMinutes;
        }
    );


    const paidDayMinutes =
        calculateEmployeePaidDayMinutes(
            employee
        );


    const unpaidHours =
        totalUnpaidMinutes / 60;


    const unpaidDays =
        paidDayMinutes > 0
            ? totalUnpaidMinutes /
                paidDayMinutes
            : 0;


    daysLateElement.textContent =
        daysLate;


    totalLateTimeElement.textContent =
        formatMinutes(
            totalLateMinutes
        );


    fullDaysUnpaidElement.textContent =
        fullDaysUnpaid;


    fullDayUnpaidHoursElement.textContent =
        formatMinutes(
            fullDayUnpaidMinutes
        );


    unpaidHoursElement.textContent =
        unpaidHours.toFixed(2);


    unpaidDaysElement.textContent =
        `${unpaidDays.toFixed(2)} days`;
}

// =============================================
// All Employees Payroll Summary
// =============================================

function renderAllEmployeesPayrollSummary() {

    const selectedMonth =
        monthFilterInput.value;

    allEmployeesSummaryBody.innerHTML = "";


    if (employees.length === 0) {

        allEmployeesSummaryBody.innerHTML = `
            <tr>
                <td colspan="7" class="empty-row">
                    No employees added yet.
                </td>
            </tr>
        `;

        return;
    }

    let grandDaysLate = 0;

let grandLateMinutes = 0;

let grandFullDaysUnpaid = 0;

let grandUnpaidMinutes = 0;


    employees.forEach(employee => {

        const employeeEntries =
            attendanceEntries.filter(entry =>
                String(entry.employeeId) ===
                    String(employee.id)
                &&
                entry.date.startsWith(
                    selectedMonth
                )
            );


        let daysLate = 0;
        let totalLateMinutes = 0;
        let fullDaysUnpaid = 0;
        let totalUnpaidMinutes = 0;


        employeeEntries.forEach(entry => {

            if (entry.entryType === "late") {

                daysLate++;

                totalLateMinutes +=
                    entry.lateMinutes;
            }


            if (entry.entryType === "fullDay") {

                fullDaysUnpaid++;
            }


            totalUnpaidMinutes +=
                entry.unpaidMinutes;
        });


        const paidDayMinutes =
            calculateEmployeePaidDayMinutes(
                employee
            );


        const totalUnpaidHours =
            totalUnpaidMinutes / 60;


        const unpaidDays =
            paidDayMinutes > 0
                ? totalUnpaidMinutes /
                  paidDayMinutes
                : 0;

                grandDaysLate +=
    daysLate;

grandLateMinutes +=
    totalLateMinutes;

grandFullDaysUnpaid +=
    fullDaysUnpaid;

grandUnpaidMinutes +=
    totalUnpaidMinutes;


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                ${employee.name}
            </td>

            <td>
                ${employee.employeeNumber}
            </td>

            <td>
                ${daysLate}
            </td>

            <td>
                ${formatMinutes(totalLateMinutes)}
            </td>

            <td>
                ${fullDaysUnpaid}
            </td>

            <td>
                ${totalUnpaidHours.toFixed(2)}
            </td>

            <td>
                ${unpaidDays.toFixed(2)} days
            </td>

        `;


        allEmployeesSummaryBody
    .appendChild(row);
});


const totalRow =
    document.createElement("tr");

totalRow.classList.add(
    "grand-total-row"
);


totalRow.innerHTML = `

    <td colspan="2">
        <strong>GRAND TOTAL</strong>
    </td>

    <td>
        <strong>${grandDaysLate}</strong>
    </td>

    <td>
        <strong>${formatMinutes(grandLateMinutes)}</strong>
    </td>

    <td>
        <strong>${grandFullDaysUnpaid}</strong>
    </td>

    <td>
        <strong>${(grandUnpaidMinutes / 60).toFixed(2)}</strong>
    </td>

    <td>
        <strong>See individual totals</strong>
    </td>

`;


allEmployeesSummaryBody
    .appendChild(totalRow);
}

// =============================================
// Print Payroll Report
// =============================================

function printPayrollReport() {

    const selectedMonth =
        monthFilterInput.value;

    if (!selectedMonth) {

        alert(
            "Please select a payroll month first."
        );

        return;
    }


    const [year, month] =
        selectedMonth.split("-");


    const monthName =
        new Date(
            Number(year),
            Number(month) - 1
        ).toLocaleDateString(
            "en-ZA",
            {
                month: "long",
                year: "numeric"
            }
        );


    const printPayrollPeriod =
        document.getElementById(
            "printPayrollPeriod"
        );

    const printGeneratedDate =
        document.getElementById(
            "printGeneratedDate"
        );


    printPayrollPeriod.textContent =
        monthName;


    printGeneratedDate.textContent =
        new Date().toLocaleDateString(
            "en-ZA",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );


    window.print();
}


// =============================================
// Event Listeners
// =============================================

loginButton.addEventListener(
    "click",
    handleLogin
);

loginPasswordInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {
            handleLogin();
        }
    }
);

logoutButton.addEventListener(
    "click",
    handleLogout
);

manageUsersButton.addEventListener(
    "click",
    openUserManagement
);

closeUserManagementButton.addEventListener(
    "click",
    closeUserManagement
);

createUserButton.addEventListener(
    "click",
    createUserAccount
);

addEmployeeButton.addEventListener(
    "click",
    openAddEmployeeForm
);

editEmployeeButton.addEventListener(
    "click",
    editSelectedEmployee
);


deleteEmployeeButton.addEventListener(
    "click",
    deleteSelectedEmployee
);


saveEmployeeButton.addEventListener(
    "click",
    saveEmployee
);


cancelEmployeeButton.addEventListener(
    "click",
    closeEmployeeForm
);

cancelEditEntryButton.addEventListener(
    "click",
    closeEditEntryModal
);

updateEntryButton.addEventListener(
    "click",
    updateEditedEntry
);

editEntryModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            editEntryModal
        ) {

            closeEditEntryModal();
        }
    }
);

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
            &&
            editEntryModal.style.display === "flex"
        ) {

            closeEditEntryModal();
        }
    }
);

saveCarWashButton.addEventListener(
    "click",
    saveCarWash
);

carWashPayrollMonthInput.addEventListener(
    "change",
    renderCarWashPayrollSummary
);

carWashHistoryMonthInput.addEventListener(
    "change",
    function () {
        renderCarWashHistory(
            carWashEntries
        );
    }
);

carWashHistorySearchInput.addEventListener(
    "input",
    function () {
        renderCarWashHistory(
            carWashEntries
        );
    }
);

markAllCarWashesLoadedButton.addEventListener(
    "click",
    markAllCarWashesAsLoaded
);

printCarWashPayrollButton.addEventListener(
    "click",
    function () {
        printCarWashPayrollReport();
    }
);


saveEntryButton.addEventListener(
    "click",
    saveEntry
);

printPayrollButton.addEventListener(
    "click",
    printPayrollReport
);


entryTypeInput.addEventListener(
    "change",
    handleEntryTypeChange
);

editEntryTypeInput.addEventListener(
    "change",
    function () {

        if (
            editEntryTypeInput.value ===
            "fullDay"
        ) {

            editEntryArrivalInput.value =
                "";

            editEntryArrivalInput.disabled =
                true;

        } else {

            editEntryArrivalInput.disabled =
                false;

            editEntryArrivalInput.readOnly =
                false;

            if (
                !editEntryArrivalInput.value
            ) {

                editEntryArrivalInput.value =
                    editEntryArrivalInput.dataset.originalArrival || "";
            }
        }
    }
);


employeeSelect.addEventListener(
    "change",
    function () {

        renderEntries();

        updatePayrollSummary();
    }
);

// =========================================
// Main Navigation Switching
// =========================================

unpaidLeaveNavButton.addEventListener(
    "click",
    function () {

        unpaidLeaveSection.style.display =
            "block";

        carWashSection.style.display =
            "none";

        unpaidLeaveNavButton.classList.add(
            "active"
        );

        carWashNavButton.classList.remove(
            "active"
        );
    }
);


carWashNavButton.addEventListener(
    "click",
    function () {

        unpaidLeaveSection.style.display =
            "none";

        carWashSection.style.display =
            "block";

        unpaidLeaveNavButton.classList.remove(
            "active"
        );

        carWashNavButton.classList.add(
            "active"
        );
    }
);

// =========================================
// Car Wash Vehicle Pricing
// =========================================

carWashVehicleTypeInput.addEventListener(
    "change",
    function () {

        if (
            carWashVehicleTypeInput.value ===
            "small"
        ) {

            carWashAmountInput.value =
                "80";

        } else if (
            carWashVehicleTypeInput.value ===
            "large"
        ) {

            carWashAmountInput.value =
                "100";

        } else {

            carWashAmountInput.value =
                "";
        }
    }
);


monthFilterInput.addEventListener(
    "change",
    function () {

        renderEntries();

        updatePayrollSummary();

        renderAllEmployeesPayrollSummary();
    }
);


// =============================================
// Initial Load
// =============================================

restoreLoginSession();

handleEntryTypeChange();

renderEntries();

updatePayrollSummary();

renderAllEmployeesPayrollSummary();