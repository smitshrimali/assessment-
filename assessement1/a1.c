#include <stdio.h>

int main()
{
    int choice, qty;
    char more;
    float totalBill = 0;

    printf("\n=====================================\n");
    printf("      WELCOME TO FOOD CAFE\n");
    printf("=====================================\n");

    do
    {
        // Display Food Menu
        printf("\n----------- MENU -----------\n");
        printf("1. Pizza       - Rs.250\n");
        printf("2. Burger      - Rs.120\n");
        printf("3. Sandwich    - Rs.100\n");
        printf("4. French Fries- Rs.80\n");
        printf("5. Cold Drink  - Rs.50\n");
        printf("----------------------------\n");

        // Take user's choice
        printf("Enter Food Code (1-5): ");
        scanf("%d", &choice);

        // Take quantity
        printf("Enter Quantity: ");
        scanf("%d", &qty);

        // Calculate bill using switch-case
        switch(choice)
        {
            case 1:
                totalBill += 250 * qty;
                printf("Pizza Added Successfully!\n");
                break;

            case 2:
                totalBill += 120 * qty;
                printf("Burger Added Successfully!\n");
                break;

            case 3:
                totalBill += 100 * qty;
                printf("Sandwich Added Successfully!\n");
                break;

            case 4:
                totalBill += 80 * qty;
                printf("French Fries Added Successfully!\n");
                break;

            case 5:
                totalBill += 50 * qty;
                printf("Cold Drink Added Successfully!\n");
                break;

            default:
                printf("Invalid Food Code!\n");
        }

        // Ask user to continue ordering
        printf("\nDo you want to order more? (Y/N): ");
        scanf(" %c", &more);

    } while(more == 'Y' || more == 'y');

    // Display Final Bill
    printf("\n=====================================\n");
    printf("         FINAL BILL\n");
    printf("=====================================\n");
    printf("Total Amount = Rs. %.2f\n", totalBill);
    printf("Thank You! Visit Again.\n");
    printf("=====================================\n");

    return 0;
}