#include <iostream>
#include <ctime>
using namespace std;

class ATM
{
private:
    int pin;
    double initialBalance;
    double balance;

public:
    // Constructor
    ATM();

    void welcomeScreen();
    void helpScreen();
    bool verifyPIN();
    void menu();
    void deposit();
    void withdraw();
    void checkBalance();
};

// Constructor Definition using Scope Resolution Operator
ATM::ATM()
{
    pin = 12345;
    initialBalance = 60000;
    balance = 20000;
}

// Welcome Screen
void ATM::welcomeScreen()
{
    time_t now = time(0);

    cout << "=========================================\n";
    cout << "          WELCOME TO ABC BANK ATM\n";
    cout << "=========================================\n";
    cout << "Current Date & Time : " << ctime(&now);
    cout << "=========================================\n";
    cout << "1. Login\n";
    cout << "2. Help\n";
    cout << "3. Exit\n";
}

// Help Screen
void ATM::helpScreen()
{
    cout << "\n========== HELP ==========\n";
    cout << "1. Enter ATM PIN (12345)\n";
    cout << "2. Select required option.\n";
    cout << "3. Deposit Money.\n";
    cout << "4. Withdraw Money.\n";
    cout << "5. Check Balance.\n";
    cout << "6. Exit.\n";
    cout << "==========================\n";
}

// Verify PIN
bool ATM::verifyPIN()
{
    int enteredPin;

    cout << "\nEnter ATM PIN: ";
    cin >> enteredPin;

    if (enteredPin == pin)
    {
        cout << "\nLogin Successful.\n";
        return true;
    }
    else
    {
        cout << "\nIncorrect PIN!";
        cout << "\nOnly One Attempt Allowed.";
        cout << "\nThank You...\n";
        return false;
    }
}

// ATM Menu
void ATM::menu()
{
    int choice;

    do
    {
        cout << "\n=========== ATM MENU ===========\n";
        cout << "1. Deposit\n";
        cout << "2. Withdraw\n";
        cout << "3. Check Balance\n";
        cout << "4. Exit\n";
        cout << "Enter Choice : ";
        cin >> choice;

        switch(choice)
        {
            case 1:
                deposit();
                break;

            case 2:
                withdraw();
                break;

            case 3:
                checkBalance();
                break;

            case 4:
                cout << "\nThank You for Banking with Us.\n";
                break;

            default:
                cout << "\nInvalid Choice.\n";
        }

    } while(choice != 4);
}

// Deposit Function
void ATM::deposit()
{
    double amount;

    cout << "\nInitial Account Balance : Rs." << initialBalance;
    cout << "\nPresent Balance : Rs." << balance;

    cout << "\nEnter Amount to Deposit : Rs.";
    cin >> amount;

    balance += amount;

    cout << "\nDeposit Successful.";
    cout << "\nUpdated Balance : Rs." << balance << endl;
}

// Withdraw Function
void ATM::withdraw()
{
    double amount;

    cout << "\nEnter Withdrawal Amount : Rs.";
    cin >> amount;

    if(amount > balance)
    {
        cout << "\nInsufficient Balance!";
        cout << "\nTransaction Failed.\n";
    }
    else
    {
        balance -= amount;

        cout << "\nWithdrawal Successful.";
        cout << "\nRemaining Balance : Rs." << balance << endl;
    }
}

// Check Balance
void ATM::checkBalance()
{
    cout << "\nCurrent Balance : Rs." << balance << endl;
}

// Main Function
int main()
{
    ATM obj;
    int option;

    obj.welcomeScreen();

    cout << "\nEnter Choice : ";
    cin >> option;

    switch(option)
    {
        case 1:
            if(obj.verifyPIN())
            {
                obj.menu();
            }
            break;

        case 2:
            obj.helpScreen();
            break;

        case 3:
            cout << "\nThank You...\n";
            break;

        default:
            cout << "\nInvalid Choice.\n";
    }

    return 0;
}